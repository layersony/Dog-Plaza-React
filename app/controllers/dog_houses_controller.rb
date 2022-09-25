class DogHousesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_Dog_house_not_found
  skip_before_action :authorized, only: [:index]

  def index 
    render json: DogHouse.all(), status: :ok
  end 

  def show
    doghouse = dogfind
    render json: doghouse, status: :ok
  end 

  def create
    doghouse = DogHouse.create!(doghouseparams)
    render json: doghouse, status: :created
  end 

  def update 
    doghouse = dogfind
    dogupdate = doghouse.update!(doghouseparams)
    render json: doghouse, status: :ok
  end 

  def destroy
    doghouse = dogfind
    doghouse.destroy
    head :no_content
  end 

  private
  def dogfind 
    DogHouse.find(params[:id])
  end 

  def render_Dog_house_not_found
    return render json: { error: "Dog House not Found" }, status: :not_found
  end

  def doghouseparams
    params.permit(:id, :imageurl, :name, :description, :location, :price, :amedities, :dogrooms)
  end 
end
