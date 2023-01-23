class User < ApplicationRecord
    has_secure_password

    has_many :baby_showers, dependent: :destroy
    has_many :items, dependent: :destroy
end
