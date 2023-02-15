class Property < ActiveRecord::Base
    belongs_to :landlord
    has_many :reviews
    has_many :users, through: :reviews
end