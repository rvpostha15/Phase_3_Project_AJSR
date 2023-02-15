class User < ActiveRecord::Base
    has_many :reviews
    has_many :properties, through: :reviews

    def full_name
        "#{self.first_name} #{self.last_name}"
    end

    # def self.email_login(e_login)
    #     find_by(email: e_login)
    # end

end

# User.find_by(email: "ron@example.com")