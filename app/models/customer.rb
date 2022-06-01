require 'bcrypt'
class Customer < ApplicationRecord
include BCrypt
    has_many :reviews
    has_many :orders
    has_many :order_histories
    has_many :menu_items, through: :reviews
    has_many :menu_items, through: :orders

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 3 }
end
