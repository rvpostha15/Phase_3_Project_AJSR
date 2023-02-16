class ReviewsController < ApplicationController
    
    get '/reviews/:id' do
        reviews = Review.find(params[:id])
        reviews.to_json
    end

    post '/reviews' do 
        review = Review.create(
            text: params[:text],
            user_id: params[:user_id],
            property_id: params[:property_id]
        )
        review.to_json
    end

    patch '/reviews/:id' do 
        review = Review.find(params[:id])
        review.update(text: params[:text])
        review.to_json
    end

    delete '/reviews/:id' do 
        review = Review.find(params[:id])
        review.destroy
        review.to_json
    end

end