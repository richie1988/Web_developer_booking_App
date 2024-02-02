class Api::WebDevelopersController < ApplicationController
  before_action :authenticate_api_user!

  def index
    developers = WebDeveloper.includes(:webdeveloper_skills, :skills).all
    render json: developers, status: :ok
  end

  def show
    developer = WebDeveloper.includes(:webdeveloper_skills, :skills).find(params[:id])
    render json: developer, status: :ok
  end

  def create
    developer = WebDeveloper.new(developer_params)

    if developer.save
      render json: developer, status: :created
    else
      render json: { error: developer.errors.full_messages }, status: :bad_request
    end
  end

  def update
    developer = WebDeveloper.find(params[:id])

    if developer.update(developer_params)
      render json: developer, status: :ok
    else
      render json: { error: developer.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    developer = WebDeveloper.find(params[:id])
    developer.destroy
    head :no_content
  end

  private

  def developer_params
    params.require(:web_developer).permit(:name, :title, :description, :hourly_rate, :image_url, :linkedin_url,
                                          :twitter_url, :github_url, :email, :phone, :city)
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
