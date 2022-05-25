class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :category, :image
end
