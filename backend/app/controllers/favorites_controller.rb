class FavoritesController < ApplicationController
    get '/favorites' do 
        users = Favorite.all 
        users.to_json
    end

    post '/favorites' do 
        favorite = Favorite.create(params)
        favorite.to_json
    end

    delete '/favorites/:id' do 
        favorite = Favorite.find_id(params[:id])
        favorite.destroy
    end
end