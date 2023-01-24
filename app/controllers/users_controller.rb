class UsersController < ApplicationController
    skip_before_action :authorized_user, only:[:create]

    def show 
        render json: current_user, status: :ok
    end 

    def index 
        render json: current_user, status: :ok
    end 

    def edit_profile
        user = User.find(params[:id])
        user.update!(profile_params)
        render json: user, status: :accepted
    end

    def show_showers
        showers = BabyShower.where(user_id: current_user.id)
        render json: showers, include: :items
    end

    # This is the items you are gifting TO people 
    def show_gifts
        items = Item.where(user_id: current_user.id)
        render json: items, include: :baby_shower
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end 
    
    private 

    def user_params
        params.permit(:username, :email, :password)
    end 

    def profile_params
        params.permit(:first_name, :last_name, :gender, :city, :state, :email)
    end

end
