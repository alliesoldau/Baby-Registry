Rails.application.routes.draw do
  
  resources :users, only: [:show, :create]
  resources :baby_showers, only: [ :index, :show, :create, :update, :destroy]
  resources :items, only: [ :index, :show, :create, :update, :destroy]

  # Custom auth Routes
  get '/authorized', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
