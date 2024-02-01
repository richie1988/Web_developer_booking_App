class CreateWebdeveloperSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :webdeveloper_skills do |t|
      t.integer :level

      t.timestamps
    end
  end
end
