class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :text
      t.integer :user_id
      t.integer :property_id
    end
    
  end
end
