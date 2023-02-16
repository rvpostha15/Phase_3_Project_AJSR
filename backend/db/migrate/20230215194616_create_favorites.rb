class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :property_id 
      t.integer :user_id 
    end
    
  end
end
