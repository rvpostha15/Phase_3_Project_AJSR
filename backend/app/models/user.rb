class User < ActiveRecord::Base
    has_many :reviews
    has_many :properties, through: :reviews, source: :property
    has_many :favorites
    has_many :properties, through: :favorites, source: :property 

    def full_name
        "#{self.first_name} #{self.last_name}"
    end

    def favorite_properties 
        self.favorites.map do |favorite|
            favorite.property
        end
    end

end

