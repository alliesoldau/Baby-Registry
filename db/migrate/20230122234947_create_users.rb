class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :image_url
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
