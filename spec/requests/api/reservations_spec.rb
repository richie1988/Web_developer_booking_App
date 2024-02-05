require 'swagger_helper'
require 'jwt'

SECRET_KEY = Rails.application.secret_key_base

RSpec.describe 'api/reservations', type: :request do
  path '/api/reservations' do
    get('list reservations') do
      tags 'reservations'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
        let(:current_user) { User.create(username: 'existing_username') }
        let(:valid_token) { JWT.encode({ exp: 7.days.from_now.to_i, user_id: current_user.id }, SECRET_KEY) }
        let(:Authorization) { "Bearer #{valid_token}" }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/new-reservation' do
    post('create reservation') do
      tags 'reservations'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          reservation: {
            type: :object,
            properties: {
              city: { type: :string },
              reservation_date: { type: :string },
              web_developer_id: { type: :integer }
            },
            required: %w[city reservation_date web_developer_id]
          }
        },
        required: %(reservation)
      }

      response '200', 'Reservation created' do
        let(:current_user) { User.create(username: 'existing_username') }
        let(:web_developer) do
          WebDeveloper.create(
            name: 'John Doe',
            title: 'Full Stack Developer',
            description: 'Passionate about web development',
            hourly_rate: 50,
            image_url: 'https://example.com/image.jpg',
            city: 'Abuja',
            email: 'example@gmail.com',
            phone: '+254789034567',
            linkedin_url: 'https://www.linkedin.com/in/james-smart/',
            twitter_url: 'https://twitter.com/eseosa78',
            github_url: 'https://github.com/ahemedoduola'
          )
        end
        let(:valid_token) { JWT.encode({ exp: 7.days.from_now.to_i, user_id: current_user.id }, SECRET_KEY) }
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:reservation) { { city: 'My City', reservation_date: Date.tomorrow, web_developer_id: web_developer.id } }
        run_test!
      end
    end
  end

  path '/api/reservation/update' do
    put('update reservation') do
      tags 'reservations'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          reservation_id: { type: :integer },
          reservation: {
            type: :object,
            properties: {
              city: { type: :string },
              reservation_date: { type: :string },
              web_developer_id: { type: :integer }
            },
            required: %w[city reservation_date web_developer_id]
          }
        },
        required: %(reservation_id reservation)
      }

      response '200', 'Reservation updated' do
        let(:current_user) { User.create(username: 'existing_username') }
        let(:web_developer) do
          WebDeveloper.create(
            name: 'John Doe',
            title: 'Full Stack Developer',
            description: 'Passionate about web development',
            hourly_rate: 50,
            image_url: 'https://example.com/image.jpg',
            city: 'Abuja',
            email: 'example@gmail.com',
            phone: '+254789034567',
            linkedin_url: 'https://www.linkedin.com/in/james-smart/',
            twitter_url: 'https://twitter.com/eseosa78',
            github_url: 'https://github.com/ahemedoduola'
          )
        end

        let(:reservation_data) do
          Reservation.create(
            city: 'Example City',
            reservation_date: Date.today,
            user_id: current_user.id,
            web_developer_id: web_developer.id
          )
        end
        let(:valid_token) { JWT.encode({ exp: 7.days.from_now.to_i, user_id: current_user.id }, SECRET_KEY) }
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:reservation) do
          { reservation_id: reservation_data.id,
            reservation: { city: 'New City', reservation_date: Date.tomorrow, web_developer_id: web_developer.id } }
        end
        run_test!
      end
    end
  end

  path '/api/reservation/delete' do
    delete('delete reservation') do
      tags 'reservations'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          reservation_id: { type: :integer }
        },
        required: %w[reservation_id]
      }

      response '200', 'Reservation deleted' do
        let(:current_user) { User.create(username: 'existing_username') }
        let(:web_developer) do
          WebDeveloper.create(
            name: 'John Doe',
            title: 'Full Stack Developer',
            description: 'Passionate about web development',
            hourly_rate: 50,
            image_url: 'https://example.com/image.jpg',
            city: 'Abuja',
            email: 'example@gmail.com',
            phone: '+254789034567',
            linkedin_url: 'https://www.linkedin.com/in/james-smart/',
            twitter_url: 'https://twitter.com/eseosa78',
            github_url: 'https://github.com/ahemedoduola'
          )
        end

        let(:reservation_data) do
          Reservation.create(
            city: 'Example City',
            reservation_date: Date.today,
            user_id: current_user.id,
            web_developer_id: web_developer.id
          )
        end
        let(:valid_token) { JWT.encode({ exp: 7.days.from_now.to_i, user_id: current_user.id }, SECRET_KEY) }
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:reservation) { { reservation_id: reservation_data.id } }
        run_test!
      end
    end
  end
end
