class DogHousesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_Dog_house_not_found

  def index 
    render json: DogHouse.all(), status: :ok
  end 

  def show
    doghouse = DogHouse.find(params[:id])
    render json: doghouse, status: :ok
  end 

  def create
    doghouse = DogHouse.create!(doghouseparams)
    render json: doghouse, status: :created
  end 

  def update 
    doghouse = DogHouse.find(params[:id])
    dogupdate = doghouse.update!(doghouseparams)
    render json: doghouse, status: :ok
  end 

  def destroy
    doghouse = DogHouse.find(params[:id])
    doghouse.destroy
    head :no_content
  end 

  private
  def render_Dog_house_not_found
    return render json: { error: "Dog House not Found" }, status: :not_found
  end

  def doghouseparams
    params.permit(:id, :imageurl, :name, :description, :location, :price, :amedities, :dogrooms)
  end 
end
