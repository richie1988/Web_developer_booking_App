class AddMoreColumnsToWebDevelopers < ActiveRecord::Migration[7.1]
  def change
    add_column :web_developers, :email, :string
    add_column :web_developers, :phone, :string
    add_column :web_developers, :city, :string
  end
end
