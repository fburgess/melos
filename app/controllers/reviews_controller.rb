class ReviewsController < ApplicationController
     # before_action :authenticate_user, except: [:show, :index]
     before_action :review_find, only: [:show, :edit, :update, :destroy]
     before_action :authorize_review, only: [:update, :edit, :destroy]
    
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

    def create
          # byebug
          @review = @current_customer.reviews.create!(review_params)
          render json: reviews, status: :created
     end

      def create2
          review_params.customer_id=session[:customer_id];
          review = Review.create!(review_params)
          render json: review, status: :created
     end
     
      def update
          #comment = comment_find
          @review.update!(review_params)
          render json: @review
      end
  
      def destroy 
          #comment = @current_user.comment_find
          @review.destroy
      end

  

      private

    def review_find
        @review = review.find(params[:id])
    end

    def review_params
        params.permit(:content, :rating, :menu_item_id, :customer_id)
    end

    # def correct_user
    #     comment = Comment.find_by(id: params[:id])
    #     unless current_user?(comment.user)
    #       redirect_to user_path(current_user)
    # end

    def authorize_comment
        unless @current_user == @review.user 
          redirect_to "/ratings"
        end
      end




end
