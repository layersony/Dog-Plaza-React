class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  has_many :reviews
  has_many :dog_houses, through: :reviews
end
