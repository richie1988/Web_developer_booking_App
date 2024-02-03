class Api::WebDeveloperSkillsController < ApplicationController
  before_action :authenticate_api_user!

  def index
    developer_skills = WebdeveloperSkill.includes(:web_developer, :skill).all
    render json: developer_skills, status: :ok
  end

  def show
    developer_skill = WebdeveloperSkill.includes(:web_developer, :skill).find(params[:id])
    render json: developer_skill, status: :ok
  end

  def create
    developer_skill = WebdeveloperSkill.new(developer_skill_params)

    if developer_skill.save
      render json: developer_skill, status: :created
    else
      render json: { error: developer_skill.errors.full_messages }, status: :bad_request
    end
  end

  def update
    developer_skill = WebdeveloperSkill.find(params[:id])

    if developer_skill.update(developer_skill_params)
      render json: developer_skill, status: :ok
    else
      render json: { error: developer_skill.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    developer_skill = WebdeveloperSkill.find(params[:id])
    developer_skill.destroy
    head :no_content
  end

  private

  def developer_skill_params
    params.require(:webdeveloper_skill).permit(:level, :web_developer_id, :skill_id)
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
