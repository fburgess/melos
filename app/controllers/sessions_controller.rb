class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
  
    def create
      customer = Customer.find_by(username: params[:name])
      if customer&.authenticate(params[:password])
        session[:customer_id] = customer.id
        render json: customer
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :customer_id
      head :no_content
    end

  
  end