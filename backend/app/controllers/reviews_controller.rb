class ReviewsController < ApplicationController
    
    get '/reviews/:id' do
        reviews = Review.find(params[:id])
        reviews.to_json
    end

    post '/reviews' do 
        review = Review.create(params)
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
    end

end