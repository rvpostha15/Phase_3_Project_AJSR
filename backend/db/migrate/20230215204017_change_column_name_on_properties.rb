class ChangeColumnNameOnProperties < ActiveRecord::Migration[6.1]
  def change
    rename_column :properties, :available?, :available
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
