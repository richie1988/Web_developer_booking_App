require 'rails_helper'
require 'jwt'

SECRET_KEY = Rails.application.secret_key_base

RSpec.describe Api::SkillsController, type: :controller do
  let(:user) { User.create(username: 'test_user') }
  let(:valid_token) do
    payload = { exp: 7.days.from_now.to_i, user_id: user.id }
    JWT.encode(payload, SECRET_KEY)
  end

  before do
    request.headers['Authorization'] = "Bearer #{valid_token}"
  end

  describe 'GET #index' do
    it 'returns a list of skills' do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET #show' do
    let(:skill) { Skill.create(name: 'Ruby') }

    it 'returns a specific skill' do
      get :show, params: { id: skill.id }
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new skill' do
        post :create, params: { skill: { name: 'JavaScript' } }
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid params' do
      it 'returns an error for invalid skill creation' do
        post :create, params: { skill: { name: nil } }
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe 'PUT #update' do
    let(:skill) { Skill.create(name: 'Python') }

    context 'with valid params' do
      it 'updates an existing skill' do
        put :update, params: { id: skill.id, skill: { name: 'Java' } }
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid params' do
      it 'returns an error for invalid skill update' do
        put :update, params: { id: skill.id, skill: { name: nil } }
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:skill) { Skill.create(name: 'C++') }

    it 'deletes an existing skill' do
      delete :destroy, params: { id: skill.id }
      expect(response).to have_http_status(:no_content)
    end
  end
end
