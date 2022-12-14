class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
   render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end 

  def create
    @currentuser = User.find_by(email: user_params[:email])
    if @currentuser
      render json: { error: 'User Already Exists' }, status: :conflict
    else 
      @user = User.create(user_params)
      if @user.valid?
        @token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :unprocessable_entity
      end
    end 
  end

  def show
    render json: @current_user
  end

  private
  def user_params
    params.permit(:fullname , :email, :phonenumber, :password)
  end
end
