class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end
    
    
    def show
        review = Review.find_by_id(params[:id])
        if review
             render json: review
        else
             render json: { error: "Nothing here!"}, status: :not_found
        end
     end



end
