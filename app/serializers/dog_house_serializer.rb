class DogHouseSerializer < ActiveModel::Serializer
  attributes :id, :imageurl, :name, :description, :location, :price, :amedities, :dogrooms
end
