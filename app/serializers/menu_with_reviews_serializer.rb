class MenuWithReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :category, :image
  has_many :reviews
end
