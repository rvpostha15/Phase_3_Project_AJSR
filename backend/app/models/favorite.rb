class Favorite < ActiveRecord::Base 
    belongs_to :user 
    belongs_to :property

    def self.most_favorited
        arr = self.all.map do |favorite|
            favorite.property_id
        end
        id = arr.max_by do |a|
            arr.count(a)
        end 
        Property.find(id)
    end

    def self.find_id(id)
        self.find_by(property_id: id)
    end


end