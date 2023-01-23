class BabyShower < ApplicationRecord
    belongs_to :user
    has_many :items, dependent: :destroy
    has_many :users, through: :items

end
