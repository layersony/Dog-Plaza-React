class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :email, :phonenumber
end
