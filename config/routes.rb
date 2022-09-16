Rails.application.routes.draw do
  resources :reviews
  resources :dog_houses, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
end
