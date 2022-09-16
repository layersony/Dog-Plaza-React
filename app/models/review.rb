class Review < ApplicationRecord
  belongs_to :dog_house
  belongs_to :user
end
