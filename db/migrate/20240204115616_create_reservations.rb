class CreateReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :reservations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :web_developer, null: false, foreign_key: true
      t.string :city
      t.datetime :reservation_date

      t.timestamps
    end
  end
end
