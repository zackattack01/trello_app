class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.references :card, index: true, foreign_key: true
      t.string :title
      t.integer :completed

      t.timestamps null: false
    end
  end
end
