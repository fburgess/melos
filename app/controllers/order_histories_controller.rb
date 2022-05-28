class OrderHistoriesController < ApplicationController

    def index
        render json: OrderHistory.all
    end
    
    
    def show
        order = OrderHistory.find_by_id(params[:id])
        if order
             render json: order
        else
             render json: { error: "Nothing here!"}, status: :not_found
        end
     end

end
