class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title
      t.references :list, index: true, foreign_key: true
      t.integer :ord
      t.text :description

      t.timestamps null: false
    end
  end
end
