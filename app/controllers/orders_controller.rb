class OrdersController < ApplicationController

    def index
        render json: Order.all
    end
    

    def show
        ordered = Order.find_by_id(params[:id])
        if ordered
             render json: ordered
        else
             render json: { error: "Nothing here!"}, status: :not_found
        end
     end

private

    # def findOrder
    #     Order.find(params[:id])
    # end


    
end
