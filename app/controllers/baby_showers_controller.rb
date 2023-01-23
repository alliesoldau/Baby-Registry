class BabyShowersController < ApplicationController

    def index 
        render json: BabyShower.all, status: :ok
    end 

    def show
        baby_shower = BabyShower.find(params[:id])
        render json: baby_shower, include: :cast_members, status: :ok
    end 

    def create
        baby_shower = BabyShower.create!(baby_shower_params)
        render json: baby_shower, status: :created
    end 

    def update 
        baby_shower = BabyShower.find(params[:id])
        baby_shower.update!(baby_shower_params)
        render json: baby_shower, status: :accepted
    end 

    def destroy
        baby_shower = BabyShower.find(params[:id])
        baby_shower.destroy
        head :no_content 
    end 

    private
    
    def baby_shower_params
        params.permit(:baby_shower_name, :date, :address, :image_url, :description, :user_id)
    end 

end