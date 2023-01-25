class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true

    has_many :baby_showers, dependent: :destroy
    has_many :items, dependent: :destroy
    has_many :baby_showers, through: :items

    def self.filtered_users(search)
        self.where('username like ?', "%" + search + "%")
    end
end
