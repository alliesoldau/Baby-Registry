Rails.application.routes.draw do
  
  resources :users, only: [:show, :create, :index]
  resources :baby_showers, only: [ :index, :show, :create, :update, :destroy]
  resources :items, only: [ :index, :show, :create, :update, :destroy]

  # Custom auth Routes
  get '/authorized', to: 'users#show'
  get '/users/search/:search', to: 'users#search'
  get '/users/:id/baby_showers', to: 'users#show_showers'
  get '/users/:id/gifts', to: 'users#show_gifts'
  post '/login', to: 'sessions#create'
  post '/baby_showers/:id/add_items', to: 'items#create'
  patch 'users/:id/profile/edit', to: 'users#edit_profile'
  patch '/baby_showers/:id/edit', to: 'baby_showers#update'
  patch '/items/:id/edit', to: 'items#update'
  patch '/items/:id/surrender', to: 'items#surrender_item'
  delete '/delete_account/:id', to: 'users#delete_account'
  delete '/logout', to: 'sessions#destroy'

end
