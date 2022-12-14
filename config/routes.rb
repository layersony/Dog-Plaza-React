Rails.application.routes.draw do
  resources :reviews, only: [:create, :destroy]
  resources :dog_houses, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  get "/me", to: "users#show"
  get "/getreviews/:id", to: "reviews#getreviews"
end
