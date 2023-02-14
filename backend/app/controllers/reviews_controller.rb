class ReviewsController < ApplicationController
    
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