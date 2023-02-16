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

        # counts kisses/yeses for each recipe
        def favorites_count
            self.favorites.count
        end
    
        # calculates the top 5 kissed recipes
        def self.top_five_kiss_count
            kisses = self.all.sort_by do |recipe|
                recipe.kiss_count
            end
            kisses.reverse.first(5)
        end
end