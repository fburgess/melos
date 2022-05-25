class Customer < ApplicationRecord

    has_many :reviews
    has_many :orders
    has_many :menu_item, through: :reviews
    has_many :cmenu_items, through: :order

    # has_secure_password
    # validates :username, presence: true, uniqueness: true
    # validates :password, presence: true, length: { minimum: 6 }
end
