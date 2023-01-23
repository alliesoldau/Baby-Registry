class Item < ApplicationRecord
    belongs_to :baby_shower
    belongs_to :user
end
