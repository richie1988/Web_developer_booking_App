Rails.application.routes.draw do
  
  namespace :api do
    get 'message' => 'messages#index'
  end

  Rails.application.routes.draw do
    root 'root#index'
  end

  get "up" => "rails/health#show", as: :rails_health_check

end
