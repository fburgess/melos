class CustomersController < ApplicationController


  def index
    render json: Customer.all
end


def show
    user = Customer.find_by_id(params[:id])
    if user
         render json: user
    else
         render json: { error: "Nothing here!"}, status: :not_found
    end
 end




    # skip_before_action :authorize, only: [:create]
  
    # def create
    #   user = Customer.create!(customer_params)
    #   session[:customer_id] = customer.id
    #   render json: customer, status: :created
    # end

    # def index
    #     render json: Customer.all
    # end

    # def show
    #   render json: @current_customer
    # end

    # private
  
    # def user_params
    #   params.permit(:username, :password, :password_confirmation)
    # end 

end
