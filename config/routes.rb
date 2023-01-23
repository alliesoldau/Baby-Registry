Rails.application.routes.draw do
  
  resources :users, only: [:show, :create]
  resources :baby_showers, only: [ :index, :show, :create, :update, :destroy]
  resources :items, only: [ :index, :show, :create, :update, :destroy]

  # Custome Routes
  # Auth routes
  get '/authorized', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # TO DO: What is this??
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
