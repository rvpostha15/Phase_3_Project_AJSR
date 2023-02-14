class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :title 
      t.string :street_address
      t.string :city
      t.string :state 
      t.integer :price_per_night
      t.boolean :available? 
      t.integer :user_id 
      t.integer :landlord_id
    end
    
  end
end
