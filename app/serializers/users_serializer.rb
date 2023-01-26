class UsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :gender, :email, :image_url, :city, :state
end
