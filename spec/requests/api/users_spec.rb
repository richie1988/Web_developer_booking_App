require 'swagger_helper'
require 'jwt'

RSpec.describe 'api/users', type: :request do
  path '/api/register' do
    post('register user') do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          username: { type: :string }
        },
        required: ['username']
      }

      response '200', 'user logged in' do
        let(:user) { { username: 'Testor' } }
        run_test!
      end

      response '400', 'bad request' do
        let(:user) { { username: nil } }
        run_test!
      end
    end
  end

  path '/api/login' do
    post('login user') do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          username: { type: :string }
        },
        required: ['username']
      }

      response '200', 'user logged in' do
        let(:current_user) { User.create(username: 'Testor') }
        let(:user) { { username: current_user.username } }
        run_test!
      end

      response '400', 'bad request' do
        let(:user) { { username: nil } }
        run_test!
      end
    end
  end

  path '/api/update-account' do
    put('update user') do
      tags 'Users'
      consumes 'application/json'
      security [Bearer: {}]
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          current_username: { type: :string },
          new_username: { type: :string }
        },
        required: %w[current_username new_username]
      }

      response '200', 'user logged in' do
        let(:current_user) { User.create(username: 'existing_username') }
        let(:valid_token) { JWT.encode({ exp: 7.days.from_now.to_i, user_id: current_user.id }, SECRET_KEY) }
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:user) { { current_username: 'existing_username', new_username: 'new_existing_username' } }
        run_test!
      end
    end
  end
end
