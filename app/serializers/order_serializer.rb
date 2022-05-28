class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_one :customer
  has_one :menu_item
end
