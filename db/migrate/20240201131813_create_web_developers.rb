class CreateWebDevelopers < ActiveRecord::Migration[7.1]
  def change
    create_table :web_developers do |t|
      t.string :name
      t.string :title
      t.text :description
      t.integer :hourly_rate

      t.timestamps
    end
  end
end
