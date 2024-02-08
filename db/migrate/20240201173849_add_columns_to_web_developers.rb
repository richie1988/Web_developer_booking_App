class AddColumnsToWebDevelopers < ActiveRecord::Migration[7.1]
  def change
    add_column :web_developers, :image_url, :string
    add_column :web_developers, :linkedin_url, :string
    add_column :web_developers, :twitter_url, :string
    add_column :web_developers, :github_url, :string
  end
end
