class ReviewSerializer < ActiveModel::Serializer
  attributes :id
  has_one :dog_house
  has_one :user
end
