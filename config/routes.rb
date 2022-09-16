Rails.application.routes.draw do
  resources :dog_houses
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
end
