ActiveRecord::Schema.define(version: 20150807174951) do

  create_table "boards", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "boards", ["user_id"], name: "index_boards_on_user_id"

  create_table "cards", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "list_id"
    t.integer  "ord",         null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "cards", ["list_id"], name: "index_cards_on_list_id"

  create_table "items", force: :cascade do |t|
    t.integer  "card_id"
    t.string   "title",                  null: false
    t.integer  "completed",  default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "items", ["card_id"], name: "index_items_on_card_id"

  create_table "lists", force: :cascade do |t|
    t.integer  "board_id"
    t.string   "title",      null: false
    t.integer  "ord",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "lists", ["board_id"], name: "index_lists_on_board_id"

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
