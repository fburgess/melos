class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content
  has_one :customer
  has_one :menu_item
end
