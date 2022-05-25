Rails.application.routes.draw do
  
  resources :reviews
  resources :order_histories
  resources :orders
  resources :menu_items
  resources :customers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
