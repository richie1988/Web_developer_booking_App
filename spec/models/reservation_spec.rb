require 'rails_helper'

RSpec.describe Reservation, type: :model do
  describe 'validations' do
    it 'validates presence of city' do
      reservation = Reservation.new(city: nil)
      expect(reservation).to be_invalid
      expect(reservation.errors[:city]).to include("can't be blank")
    end

    it 'validates presence of reservation_date' do
      reservation = Reservation.new(reservation_date: nil)
      expect(reservation).to be_invalid
      expect(reservation.errors[:reservation_date]).to include("can't be blank")
    end

    it 'does not allow reservation_date to be in the past' do
      reservation = Reservation.new(reservation_date: Date.yesterday)
      expect(reservation).to be_invalid
      expect(reservation.errors[:reservation_date]).to include("can't be in the past")
    end
  end

  describe 'associations' do
    it 'belongs to user' do
      expect(Reservation.reflect_on_association(:user).macro).to eq(:belongs_to)
    end

    it 'belongs to web_developer' do
      expect(Reservation.reflect_on_association(:web_developer).macro).to eq(:belongs_to)
    end
  end
end
