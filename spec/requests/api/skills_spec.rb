require 'swagger_helper'

RSpec.describe 'api/skills', type: :request do
  
  path '/api/skills' do
    get('list skills') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
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

    post('create skill') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
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

  path '/api/skills/new' do
    get('new skill') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
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

  path '/api/skills/{id}/edit' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('edit skill') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:id) { '123' }

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

  path '/api/skills/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show skill') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:id) { '123' }

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

    patch('update skill') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:id) { '123' }

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

    put('update skill') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:id) { '123' }

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

    delete('delete skill') do
      tags 'Skills'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]

      response(200, 'successful') do
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:id) { '123' }

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
end
