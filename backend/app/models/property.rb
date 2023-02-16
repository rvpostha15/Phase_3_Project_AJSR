class Property < ActiveRecord::Base
    belongs_to :landlord
    has_many :reviews
    has_many :users, through: :reviews, source: :user
    has_many :favorites 
    has_many :usersData, through: :favorites, source: :user

    def favorites_count
        self.favorites.count
    end

    def self.top_three_favorites_count
        favorites = self.all.sort_by do |favorite|
            favorite.favorites_count
        end
        favorites.reverse.first(3)
    end
end