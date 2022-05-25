class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password
end
