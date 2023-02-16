class FavoritesController < ApplicationController
    get '/favorites' do 
        users = Favorite.all 
        users.to_json
    end
end