require 'rails_helper'
require 'jwt'

SECRET_KEY = Rails.application.secret_key_base

RSpec.describe Api::ReservationsController, type: :controller do
  let(:user) { User.create(username: 'test_reservation_user') }
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
  let(:valid_attributes) do
    { city: 'Example City', reservation_date: Date.tomorrow, web_developer_id: web_developer.id }
  end
  let(:valid_update_attributes) do
    { city: 'New City', reservation_date: Date.tomorrow, web_developer_id: web_developer.id }
  end
  let(:invalid_attributes) { { city: nil, reservation_date: Date.tomorrow, web_developer_id: web_developer.id } }

  before do
    request.headers['Authorization'] = "Bearer #{valid_jwt_token}"
  end

  describe 'GET #index' do
    let(:reservation) do
      Reservation.create(
        city: 'Main City',
        reservation_date: Date.today,
        user_id: user.id,
        web_developer_id: web_developer.id
      )
    end
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new Reservation' do
        expect do
          post :create, params: { reservation: valid_attributes }
        end.to change(Reservation, :count).by(1)
        expect(response).to have_http_status(:ok)
        expect(assigns(:reservation)).to be_a(Reservation)
        expect(assigns(:reservation)).to be_persisted
      end
    end

    context 'with invalid params' do
      it 'returns a bad request response' do
        post :create, params: { reservation: invalid_attributes }
        expect(response).to have_http_status(:bad_request)
        expect(response_body['error']).to eq('The reservation could not be completed')
        expect(response_body['errors']).to be_present
      end
    end
  end

  describe 'PUT #update' do
    let(:reservation) do
      Reservation.create(
        city: 'Example City',
        reservation_date: Date.today,
        user_id: user.id,
        web_developer_id: web_developer.id
      )
    end

    context 'with valid params' do
      it 'updates the requested reservation' do
        put :update, params: { reservation_id: reservation.id, reservation: valid_update_attributes }
        reservation.reload
        expect(response).to have_http_status(:ok)
        expect(assigns(:reservation)).to eq(reservation)
        expect(reservation.city).to eq('New City')
      end
    end

    context 'with invalid params' do
      it 'returns a bad request response' do
        put :update, params: { reservation_id: reservation.id, reservation: invalid_attributes }
        expect(response).to have_http_status(:bad_request)
        expect(response_body['error']).to eq('The reservation could not be updated')
        expect(response_body['errors']).to be_present
      end
    end
  end

  describe 'DELETE #destroy' do
    let(:reservation) do
      Reservation.create(
        city: 'Other City',
        reservation_date: Date.tomorrow,
        user_id: user.id,
        web_developer_id: web_developer.id
      )
    end
    it 'destroys the requested reservation' do
      delete :destroy, params: { reservation_id: reservation.id }
      expect(response).to have_http_status(:ok)
      expect(response_body['message']).to eq('The reservation was successfully canceled')
    end
  end

  private

  def response_body
    JSON.parse(response.body)
  end

  def valid_jwt_token
    payload = {}
    payload[:exp] = 7.days.from_now.to_i
    payload[:user_id] = user.id
    JWT.encode(payload, SECRET_KEY)
  end
end
