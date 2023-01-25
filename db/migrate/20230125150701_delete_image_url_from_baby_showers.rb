class DeleteImageUrlFromBabyShowers < ActiveRecord::Migration[6.1]
  def change
    remove_column :baby_showers, :image_url
  end
end
