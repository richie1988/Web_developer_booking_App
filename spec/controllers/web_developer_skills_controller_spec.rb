require 'rails_helper'
require 'jwt'

SECRET_KEY = Rails.application.secret_key_base

RSpec.describe Api::WebDeveloperSkillsController, type: :controller do
  WebdeveloperSkill.create(level: 5, web_developer_id: 2, skill_id: 1)
  let(:user) { User.create(username: 'test_user2') }
  let(:valid_token) do
    payload = { exp: 7.days.from_now.to_i, user_id: user.id }
    JWT.encode(payload, SECRET_KEY)
  end

  before do
    request.headers['Authorization'] = "Bearer #{valid_token}"
  end

  describe 'GET #index' do
    it 'returns a list of web developer skills' do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET #show' do
    let(:testingskill) { Skill.create(name: 'Python') }
    let(:testingwebdeveloper) do
      WebDeveloper.create(name: 'John Doe', title: 'Full Stack Developer', description: 'a web developer',
                          image_url: 'https://example.com/image.jpg', hourly_rate: 80)
    end
    let(:developer_skill) do
      WebdeveloperSkill.create(level: 1, web_developer_id: testingwebdeveloper.id, skill_id: testingskill.id)
    end

    it 'returns a specific web developer skill' do
      get :show, params: { id: developer_skill.id }
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST #create' do
    let(:testingskill) { Skill.create(name: 'Python') }
    let(:testingwebdeveloper) do
      WebDeveloper.create(name: 'John Doe', title: 'Full Stack Developer', description: 'a web developer',
                          image_url: 'https://example.com/image.jpg', hourly_rate: 80)
    end
    context 'with valid params' do
      let(:valid_params) do
        {
          webdeveloper_skill: {
            level: 2,
            web_developer_id: testingwebdeveloper.id,
            skill_id: testingskill.id
          }
        }
      end

      it 'creates a new web developer skill' do
        post :create, params: valid_params
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) do
        {
          webdeveloper_skill: {
            level: nil,
            web_developer_id: nil,
            skill_id: nil
          }
        }
      end

      it 'returns an error for invalid web developer skill creation' do
        post :create, params: invalid_params
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe 'PUT #update' do
    let(:testingskill) { Skill.create(name: 'Python') }
    let(:testingwebdeveloper) do
      WebDeveloper.create(name: 'John Doe', title: 'Full Stack Developer', description: 'a web developer',
                          image_url: 'https://example.com/image.jpg', hourly_rate: 80)
    end
    let(:developer_skill) do
      WebdeveloperSkill.create(level: 3, web_developer_id: testingwebdeveloper.id, skill_id: testingskill.id)
    end

    context 'with valid params' do
      let(:valid_params) do
        {
          id: developer_skill.id,
          webdeveloper_skill: {
            level: 4,
            web_developer_id: testingwebdeveloper.id,
            skill_id: testingskill.id
          }
        }
      end

      it 'updates an existing web developer skill' do
        put :update, params: valid_params
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) do
        {
          id: developer_skill.id,
          webdeveloper_skill: {
            level: nil,
            web_developer_id: nil,
            skill_id: nil
          }
        }
      end

      it 'returns an error for invalid web developer skill update' do
        put :update, params: invalid_params
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:testingskill) { Skill.create(name: 'PHP') }
    let(:testingwebdeveloper) do
      WebDeveloper.create(name: 'Savoda', title: 'Full Stack Developer', description: 'a web developer',
                          image_url: 'https://example.com/image.jpg', hourly_rate: 80)
    end
    let(:developer_skill) do
      WebdeveloperSkill.create(level: 5, web_developer_id: testingwebdeveloper.id, skill_id: testingskill.id)
    end

    it 'deletes an existing web developer skill' do
      delete :destroy, params: { id: developer_skill.id }
      expect(response).to have_http_status(:no_content)
    end
  end
end
