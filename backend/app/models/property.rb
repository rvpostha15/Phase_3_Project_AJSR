class Property < ActiveRecord::Base
    belongs_to :landlord
    has_many :reviews
    has_many :users, through: :reviews, source: :user
    has_many :favorites 
    has_many :usersData, through: :favorites, source: :user
end