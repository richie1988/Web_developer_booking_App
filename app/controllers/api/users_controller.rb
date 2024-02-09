class Api::UsersController < ActionController::API
  include JsonWebToken

  before_action :check_auth_params!, only: %i[register login]
  before_action :authenticate_api_user!, only: %i[update]
  before_action :check_body_params!, only: %i[update]

  def register
    @user = User.new(username: params[:username])

    if @user.save
      render json: { message: 'The user was successfully created' }, status: :ok
    else
      render json: { error: 'The username is already taken' }, status: :bad_request
    end
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user
      token = jwt_encode(user_id: @user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid username or this user does not exist' }, status: :unauthorized
    end
  end

  def update
    if @current_user.username != params[:current_username]
      render json: { error: 'The current username is not valid' }, status: :bad_request
    elsif @current_user.update(username: params[:new_username])
      render json: { message: 'User successfully updated' }, status: :ok
    else
      render json: { error: 'The username is already taken' }, status: :not_found
    end
  end

  private

  def check_auth_params!
    return if params[:username]

    render json: { error: 'The username is required' }, status: :bad_request
  end

  def check_body_params!
    return unless !params[:new_username] || !params[:current_username]

    render json: { error: 'The current and new username are required' }, status: :bad_request
  end

  def authenticate_api_user!
    header = request.headers['Authorization']

    unless header
      render json: { error: 'Please provide a valid authentication token' }, status: :unauthorized
      return
    end

    header = header.split.last
    decoded = jwt_decode(header)

    unless User.find(decoded[:user_id])
      render json: { error: 'Invalid or expired token' }, status: :unauthorized
      return
    end

    @current_user = User.find(decoded[:user_id])
  end
end