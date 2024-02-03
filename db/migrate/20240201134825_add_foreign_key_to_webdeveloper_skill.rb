class AddForeignKeyToWebdeveloperSkill < ActiveRecord::Migration[7.1]
  def change
    add_reference :webdeveloper_skills, :web_developer, foreign_key: { to_table: :web_developers }, null: false
    add_reference :webdeveloper_skills, :skill, foreign_key: { to_table: :skills }, null: false
  end
end
