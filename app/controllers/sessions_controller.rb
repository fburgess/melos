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

    def showCustomer
      if session
        customer = Customer.find_by(id: session[:customer_id]);

        if customer
          render json: customer
        else
          render json: { errors: ["No Customer found with that session"] }, status: :unauthorized
        end
      else
        render json: { errors: ["No Session"] }, status: :unauthorized
      end
    end

    def show
      if @current_customer
        render json: @current_customer
      else
        render json: { errors: ["No Customer found session"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :customer_id
      head :no_content
    end

  
  end