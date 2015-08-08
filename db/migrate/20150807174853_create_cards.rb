class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.references :list, index: true, foreign_key: true
      t.integer :ord, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
