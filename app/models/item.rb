class Item < ApplicationRecord

    validates :item_name, presence: true

    belongs_to :baby_shower
    belongs_to :user, optional: true
end
