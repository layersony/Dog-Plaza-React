class CreateDogHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :dog_houses do |t|
      t.string :imageurl
      t.string :name
      t.text :description
      t.string :location
      t.integer :price
      t.string :amedities

      t.timestamps
    end
  end
end
