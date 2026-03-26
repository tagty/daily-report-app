Rails.application.routes.draw do
  resources :reports, only: [ :index, :create ]

  get "up" => "rails/health#show", as: :rails_health_check
end
