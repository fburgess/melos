class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :category, :image


  # def price 
  #   "$#{'%.2f'%object.price}"
  # end
  
end
