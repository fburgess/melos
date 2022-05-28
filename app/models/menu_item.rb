class MenuItem < ApplicationRecord

    has_many :reviews
    has_many :orders
    has_many :customers, through: :reviews
    has_many :customers, through: :orders

end
