class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_Dog_house_not_found

  def getreviews
    doghouses = DogHouse.find(params[:id]) 
    reviews = doghouses.reviews
    render json: reviews.to_json(only: [:id, :review, :dog_house_id, :rating, :created_at], include: {user: {only: [:fullname, :id]}})
  end

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
    puts params
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end 

  private 

  def review_params
    params.permit(:review, :user_id, :dog_house_id, :rating)
  end


  def render_Dog_house_not_found
    return render json: { error: "Dog House not Found" }, status: :not_found
  end

end
