require 'swagger_helper'

RSpec.describe 'api/web_developers', type: :request do
  path '/api/web_developers' do
    get('list web_developers') do
      tags 'Web Developers'
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

    post('create web_developer') do
      tags 'Web Developers'
      consumes 'application/json'
      produces 'application/json'
      security [Bearer: {}]
      parameter name: :web_developer, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string, description: 'Name of the web developer', example: 'John Doe' },
          title: { type: :string, description: 'Title of the web developer', example: 'Full Stack Developer' },
          description: { type: :string, description: 'Description of the web developer',
                         example: 'Passionate about web development' },
          hourly_rate: { type: :integer, description: 'Hourly rate of the web developer', example: 50 },
          image_url: { type: :string, format: :uri, description: 'URL of the web developer\'s image',
                       example: 'https://example.com/image.jpg' },
          city: { type: :string, description: 'city of the developer', example: 'Abuja' },
          email: { type: :string, description: 'email of the developer', example: 'example@gmail.com' },
          phone: { type: :string, description: 'phone number of the developer', example: '+254789034567' },
          linkedin_url: { type: :string, description: 'linkedin url of the developer',
                          example: 'https://www.linkedin.com/in/james-smart/' },
          twitter_url: { type: :string, description: 'twitter url of the developer',
                         example: 'https://twitter.com/eseosa78' },
          github_url: { type: :string, description: 'github url of the developer', example: 'https://github.com/ahemedoduola' }

        },
        required: %w[name title description hourly_rate image_url]
      }

      response '200', 'successful' do
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:web_developer) do
          {
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
          }
        end
        run_test!
      end

      response '400', 'bad request' do
        let(:Authorization) { "Bearer #{valid_token}" }
        let(:web_developer) { { name: nil, title: nil, description: nil, hourly_rate: nil, image_url: nil } }
        run_test!
      end
    end

    path '/api/web_developers/new' do
      get('new web_developer') do
        tags 'Web Developers'
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

    path '/api/web_developers/{id}/edit' do
      parameter name: 'id', in: :path, type: :string, description: 'id'

      get('edit web_developer') do
        tags 'Web Developers'
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

    path '/api/web_developers/{id}' do
      parameter name: 'id', in: :path, type: :string, description: 'id'

      get('show web_developer') do
        tags 'Web Developers'
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

      patch('update web_developer') do
        tags 'Web Developers'
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

      put('update web_developer') do
        tags 'Web Developers'
        consumes 'application/json'
        produces 'application/json'
        security [Bearer: {}]
        parameter name: :web_developer, in: :body, schema: {
          type: :object,
          properties: {
            name: { type: :string, description: 'Name of the web developer', example: 'John Doe' },
            title: { type: :string, description: 'Title of the web developer', example: 'Full Stack Developer' },
            description: { type: :string, description: 'Description of the web developer',
                           example: 'Passionate about web development' },
            hourly_rate: { type: :integer, description: 'Hourly rate of the web developer', example: 60 },
            image_url: { type: :string, format: :uri, description: 'URL of the web developer\'s image',
                         example: 'https://example.com/image.jpg' },
            city: { type: :string, description: 'city of the developer', example: 'Abuja' },
            email: { type: :string, description: 'email of the developer', example: 'example@gmail.com' },
            phone: { type: :string, description: 'phone number of the developer', example: '+254789034567' },
            linkedin_url: { type: :string, description: 'linkedin url of the developer',
                            example: 'https://www.linkedin.com/in/james-smart/' },
            twitter_url: { type: :string, description: 'twitter url of the developer',
                           example: 'https://twitter.com/eseosa78' },
            github_url: { type: :string, description: 'github url of the developer', example: 'https://github.com/ahemedoduola' }

          },
          required: %w[name title description hourly_rate image_url]
        }

        response '200', 'successful' do
          let(:Authorization) { "Bearer #{valid_token}" }
          let(:current_user) { User.create(username: 'test_user') }
          let(:valid_token) { JWT.encode({ exp: 7.days.from_now.to_i, user_id: current_user.id }, SECRET_KEY) }
          let(:web_developer) do
            {
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
            }
          end
          run_test!
        end
      end

      delete('delete web_developer') do
        tags 'Web Developers'
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
end
