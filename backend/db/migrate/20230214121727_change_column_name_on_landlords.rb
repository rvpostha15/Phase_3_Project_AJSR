class ChangeColumnNameOnLandlords < ActiveRecord::Migration[6.1]
  def change
    rename_column :landlords, :name, :first_name
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
