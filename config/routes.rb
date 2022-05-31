Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :create, :update, :show, :destroy]
  resources :order_histories, only: [:index, :show]
  resources :orders, only: [:index, :show]
  resources :menu_items, only: [:index, :show]
  resources :customers, only: [:index, :create, :show]

  post "/login", to: "sessions#create"
  post "/signup", to: "customers#create"
  get "/me", to: "customers#show"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #  get '/reviews', to: 'reviews#'
end
