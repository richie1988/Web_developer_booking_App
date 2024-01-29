require 'rails_helper'
require 'jwt'

SECRET_KEY = Rails.application.secret_key_base

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #register' do
    context 'with valid params' do
      it 'creates a new user' do
        post :register, params: { username: 'test_user' }
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid params' do
      it 'returns an error if the username is already taken' do
        User.create(username: 'test_user')
        post :register, params: { username: 'test_user' }
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe 'POST #login' do
    let!(:user) { User.create(username: 'test_user') }

    context 'with valid params' do
      it 'returns a token' do
        post :login, params: { username: 'test_user' }
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)).to have_key('token')
      end
    end

    context 'with invalid params' do
      it 'returns an error if the username is invalid or does not exist' do
        post :login, params: { username: 'invalid_user' }
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'PUT #update' do
    let(:user) { User.create(username: 'existing_username') }
    let(:new_username) { 'new_username' }
    let(:current_username) { 'existing_username' }

    context 'with valid parameters and valid bearer token' do
      let(:valid_token) { 
        payload = {}
        payload[:exp] = 7.days.from_now.to_i
        payload[:user_id] = user.id
        JWT.encode(payload, SECRET_KEY)
      }

      before do
        request.headers['Authorization'] = "Bearer #{valid_token}"
        put :update, params: { new_username: new_username, current_username: current_username }
      end

      it 'returns HTTP success' do
        expect(response).to have_http_status(:ok)
      end

      it 'updates the user username' do
        user.reload
        expect(user.username).to eq(new_username)
      end

      it 'returns a success message' do
        expect(JSON.parse(response.body)['message']).to eq('User successfully updated')
      end
    end
    
  end
end
