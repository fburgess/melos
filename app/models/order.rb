class Order < ApplicationRecord
  belongs_to :customer
  belongs_to :menu_item
  has_many :order_histories
end
