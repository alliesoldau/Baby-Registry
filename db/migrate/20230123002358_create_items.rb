class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.float :price
      t.string :image_url
      t.string :listing_url
      t.integer :baby_shower_id

      t.timestamps
    end
  end
end
