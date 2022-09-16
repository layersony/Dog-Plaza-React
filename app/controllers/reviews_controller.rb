class ReviewsController < ApplicationController

  def create
    dog_house = DogHouse.find(params[:dog_house_id])
    if dog_house.present?
      review = Review.create!(review_params)
      render json: review, status: :created
    end
    rescue ActiveRecord::RecordNotFound
    render json: { error: "Dog House not found" }, status: :not_found
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end 

  private 

  def review_params
    params.permit(:review, :user_id, :dog_house_id)
  end

  # def findDog
  #   DogHouse.find(params[:dog_house_id])

  # end

end
