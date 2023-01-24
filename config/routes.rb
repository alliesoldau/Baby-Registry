Rails.application.routes.draw do
  
  resources :users, only: [:show, :create, :index]
  resources :baby_showers, only: [ :index, :show, :create, :update, :destroy]
  resources :items, only: [ :index, :show, :create, :update, :destroy]

  # Custom auth Routes
  get '/authorized', to: 'users#show'
  get '/users/:id/baby_showers', to: 'users#show_showers'
  get '/users/:id/gifts', to: 'users#show_gifts'
  post '/login', to: 'sessions#create'
  patch '/baby_showers/:id/edit', to: 'baby_showers#update'
  delete '/logout', to: 'sessions#destroy'

end
