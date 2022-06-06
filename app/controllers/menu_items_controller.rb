class MenuItemsController < ApplicationController
    skip_before_action :authorize

    def index
        render json: MenuItem.all
    end


    def show
        item = MenuItem.find_by_id(params[:id])
        if item
             render json: item
        else
             render json: { error: "Nothing here!"}, status: :not_found
        end
     end



end
