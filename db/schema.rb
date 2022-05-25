# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_25_141155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "concert_id", null: false
    t.integer "rating"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["concert_id"], name: "index_comments_on_concert_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "concerts", force: :cascade do |t|
    t.string "name"
    t.string "band_name"
    t.string "genre"
    t.string "date"
    t.string "time"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "name"
    t.string "price"
    t.string "category"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "order_histories", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["order_id"], name: "index_order_histories_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "total"
    t.bigint "customer_id", null: false
    t.bigint "menu_item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_orders_on_customer_id"
    t.index ["menu_item_id"], name: "index_orders_on_menu_item_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "customer_id", null: false
    t.bigint "menu_item_id", null: false
    t.integer "rating"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_reviews_on_customer_id"
    t.index ["menu_item_id"], name: "index_reviews_on_menu_item_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.boolean "is_admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "concerts"
  add_foreign_key "comments", "users"
  add_foreign_key "order_histories", "orders"
  add_foreign_key "orders", "customers"
  add_foreign_key "orders", "menu_items"
  add_foreign_key "reviews", "customers"
  add_foreign_key "reviews", "menu_items"
end
