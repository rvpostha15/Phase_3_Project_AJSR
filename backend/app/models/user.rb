class User < ActiveRecord::Base
    has_many :reviews
    has_many :properties, through: :reviews

    def full_name
        "#{self.first_name} #{self.last_name}"
    end

end

