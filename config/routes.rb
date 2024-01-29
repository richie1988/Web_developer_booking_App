Rails.application.routes.draw do
  
  namespace :api do
    get 'example' => 'example#index'
    post 'login' => 'users#login'
    post 'register' => 'users#register'
    put 'update-account' => 'users#update'
  end

  Rails.application.routes.draw do
    root 'root#index'
  end

  get "up" => "rails/health#show", as: :rails_health_check

end
