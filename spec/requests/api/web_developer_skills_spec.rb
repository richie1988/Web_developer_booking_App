require 'swagger_helper'

RSpec.describe 'api/web_developer_skills', type: :request do
  path '/api/web_developer_skills' do
    get('List Web Developer Skills') do
      tags 'Web Developer Skills'
      description 'Retrieve a list of web developer skills'
      consumes 'application/json'
      produces 'application/json'

      response(200, 'Successful') do
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end
    end

    post('Create Web Developer Skill') do
      tags 'Web Developer Skills'
      description 'Create a new web developer skill'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :web_developer_skill, in: :body, schema: {
        type: :object,
        properties: {
          level: { type: :integer, description: 'Skill level of the web developer', example: 3 },
          web_developer_id: { type: :integer, description: 'ID of the web developer', example: 1 },
          skill_id: { type: :integer, description: 'ID of the skill', example: 2 }
        },
        required: %w[level web_developer_id skill_id]
      }

      response '201', 'Created' do
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end

      response '400', 'Bad Request' do
        let(:web_developer_skill) { { level: nil, web_developer_id: nil, skill_id: nil } }
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end
    end
  end

  path '/api/web_developer_skills/{id}' do
    parameter name: 'id', in: :path, type: :integer, description: 'ID of the web developer skill'

    get('Show Web Developer Skill') do
      tags 'Web Developer Skills'
      description 'Retrieve details of a web developer skill by ID'
      consumes 'application/json'
      produces 'application/json'

      response(200, 'Successful') do
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end

      response(404, 'Not Found') do
        let(:id) { 'nonexistent_id' }
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end
    end

    patch('Update Web Developer Skill') do
      tags 'Web Developer Skills'
      description 'Update details of a web developer skill by ID'
      consumes 'application/json'
      produces 'application/json'

      parameter name: :web_developer_skill, in: :body, schema: {
        type: :object,
        properties: {
          level: { type: :integer, description: 'Skill level of the web developer', example: 4 }
        }
      }

      response(200, 'Successful') do
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end

      response(404, 'Not Found') do
        let(:id) { 'nonexistent_id' }
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end
    end

    delete('Delete Web Developer Skill') do
      tags 'Web Developer Skills'
      description 'Delete a web developer skill by ID'
      consumes 'application/json'
      produces 'application/json'

      response(204, 'No Content') do
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end

      response(404, 'Not Found') do
        let(:id) { 'nonexistent_id' }
        let(:Authorization) { 'Bearer your_access_token' }
        run_test!
      end
    end
  end
end
