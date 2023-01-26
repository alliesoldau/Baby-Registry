class ChangeDatetimeToDateBabyShowers < ActiveRecord::Migration[6.1]
  def change
    change_column :baby_showers, :date, :date
  end
end
