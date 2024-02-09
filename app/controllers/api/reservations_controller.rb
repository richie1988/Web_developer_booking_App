class Api::ReservationsController < ActionController::API
  include JsonWebToken

  before_action :authenticate_api_user!, except: [:index]

  def index
    if @current_user
      @reservations = @current_user.reservations.includes(:web_developer).all
      render json: @reservations, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  def create
    @existing_reservation = @current_user.reservations.find_by(reservation_params)

    if @existing_reservation
      render json: { error: 'A reservation with this developer has already been made' },
             status: :bad_request
    end

    @reservation = @current_user.reservations.new(reservation_params)

    if @reservation.save
      render json: @reservation, status: :ok
    else
      render json: {
        error: 'The reservation could not be completed',
        errors: @reservation.errors
      }, status: :bad_request
    end
  end

  def update
    @existing_reservation = @current_user.reservations.find_by(reservation_params)

    if @existing_reservation
      render json: { error: 'A reservation with this developer has already been made' },
             status: :bad_request
    end

    @reservation = @current_user.reservations.find(params[:reservation_id])

    render json: { error: 'The reservation could not be found' }, status: :not_found unless @reservation

    if @reservation.update(reservation_params)
      render json: @reservation, status: :ok
    else
      render json: {
        error: 'The reservation could not be updated',
        errors: @reservation.errors
      }, status: :bad_request
    end
  end

  def destroy
    @reservation = @current_user.reservations.find(params[:reservation_id])

    render json: { error: 'The reservation could not be found' }, status: :not_found unless @reservation

    @reservation.destroy

    render json: { message: 'The reservation was successfully canceled' }, status: :ok
  end

  private

  def reservation_params
    params.require(:reservation).permit(:city, :reservation_date, :web_developer_id)
  end

  def authenticate_api_user!
    header = request.headers['Authorization']
  
    unless header
      render json: { error: 'Please provide a valid authentication token' }, status: :unauthorized
      return
    end
  
    header = header.split.last
    decoded = jwt_decode(header)
  
    # Debugging statements
    puts "Decoded token: #{decoded}"
  
    unless User.find(decoded[:user_id])
      render json: { error: 'Invalid or expired token' }, status: :unauthorized
      return
    end
  
    @current_user = User.find(decoded[:user_id])
  
    # More debugging statements
    puts "Current User: #{@current_user.inspect}"
  end
end
