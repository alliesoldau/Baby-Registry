class CreateBabyShowers < ActiveRecord::Migration[6.1]
  def change
    create_table :baby_showers do |t|
      t.string :baby_shower_name
      t.datetime :date
      t.string :address
      t.string :image_url
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
