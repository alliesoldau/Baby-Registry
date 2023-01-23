class AddClaimedColumnToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :claimed, :boolean
  end
end
