
require 'rails_helper'
require 'jwt'

SECRET_KEY = Rails.application.secret_key_base

RSpec.describe Api::WebDevelopersController, type: :controller do
  let(:user) { User.create(username: 'test_user') }
  let(:valid_token) do
    payload = { exp: 7.days.from_now.to_i, user_id: user.id }
    JWT.encode(payload, SECRET_KEY)
  end

  before do
    request.headers['Authorization'] = "Bearer #{valid_token}"
  end

  describe 'GET #index' do
    it 'returns a list of web developers' do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET #show' do
    let(:developer) { WebDeveloper.create(name: 'John Doe', title: 'Full Stack Developer',description:"a web developer",image_url:"https://example.com/image.jpg",hourly_rate:80) }

    it 'returns a specific web developer' do
      get :show, params: { id: developer.id }
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      let(:valid_params) do
        {
          web_developer: {
            name: 'Jane Doe',
            title: 'Frontend Developer',
            description: 'Passionate about web development.',
            hourly_rate: 50,
            image_url: 'https://example.com/image.jpg',
            
          }
        }
      end

      it 'creates a new web developer' do
        post :create, params: valid_params
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) do
        {
          web_developer: {
            name: nil,
            title: 'Backend Developer',
            description: 'Experienced in backend technologies.',
            hourly_rate: 60,
            image_url: 'https://example.com/image.jpg',
            
          }
        }
      end

      it 'returns an error for invalid web developer creation' do
        post :create, params: invalid_params
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe 'PUT #update' do
    let(:developer) { WebDeveloper.create(name: 'Sam Smith', title: 'UI/UX Designer',image_url:"https://example.com/image.jpg",hourly_rate:35,description:"A passionate designer") }

    context 'with valid params' do
      let(:valid_params) do
        {
          id: developer.id,
          web_developer: {
            name: 'Michael Scofield',
            title: 'Designer',
          }
        }
      end

      it 'updates an existing web developer' do
        put :update, params: valid_params
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) do
        {
          id: developer.id,
          web_developer: {
            name: nil, 
            title: 'Frontend developer',
          }
        }
      end

      it 'returns an error for invalid web developer update' do
        put :update, params: invalid_params
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:developer) { WebDeveloper.create(name: 'Alex Turner', title: 'Software Engineer',image_url:"https://example.com/image.jpg",hourly_rate:35,description:"A passionate designer") }

    it 'deletes an existing web developer' do
      delete :destroy, params: { id: developer.id }
      expect(response).to have_http_status(:no_content)
    end
  end
end
