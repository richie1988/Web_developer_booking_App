class Api::SkillsController < ActionController::API
  include JsonWebToken
  before_action :authenticate_api_user!

  def index
    skills = Skill.all
    render json: skills, status: :ok
  end

  def show
    skill = Skill.find(params[:id])
    render json: skill, status: :ok
  end

  def create
    skill = Skill.new(skill_params)

    if skill.save
      render json: skill, status: :ok
    else
      render json: { error: skill.errors.full_messages }, status: :bad_request
    end
  end

  def update
    skill = Skill.find(params[:id])

    if skill.update(skill_params)
      render json: skill, status: :ok
    else
      render json: { error: skill.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    skill = Skill.find(params[:id])
    skill.destroy
    head :no_content
  end

  private

  def skill_params
    params.require(:skill).permit(:name)
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
