class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true

    has_many :baby_showers, dependent: :destroy
    has_many :items, dependent: :destroy
end
