Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  namespace :api do
    get 'example' => 'example#index'
    post 'login' => 'users#login'
    post 'register' => 'users#register'
    put 'update-account' => 'users#update'
    resources :skills
    resources :web_developers
    resources :web_developer_skills
  end

  root 'root#index'

  get 'up' => 'rails/health#show', as: :rails_health_check
end
