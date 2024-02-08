class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :web_developer
  validates :city, presence: true
  validates :reservation_date, presence: true
  validate :reservation_date_cannot_be_in_the_past

  def reservation_date_cannot_be_in_the_past
    return unless reservation_date.present? && reservation_date < Date.today

    errors.add(:reservation_date,
               "can't be in the past")
  end
end
