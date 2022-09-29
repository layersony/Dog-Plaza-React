class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :dog_house_id, :rating
  has_one :dog_house
  has_one :user
end
