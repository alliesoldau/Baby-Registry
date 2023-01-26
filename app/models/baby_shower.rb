class BabyShower < ApplicationRecord
    
    validates :baby_shower_name, presence: true

    belongs_to :user
    has_many :items, dependent: :destroy
    has_many :users, through: :items

end
