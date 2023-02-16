class FavoritesController < ApplicationController
    get '/favorites' do 
        users = Favorite.all 
        users.to_json
    end

    post '/favorites' do 
        favorite = Favorite.create(params)
        favorite.to_json
    end
end