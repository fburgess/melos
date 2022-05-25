class OrderHistorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :order
end
