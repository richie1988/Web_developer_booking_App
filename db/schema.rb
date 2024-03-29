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

ActiveRecord::Schema[7.1].define(version: 2024_02_04_115616) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reservations", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "web_developer_id", null: false
    t.string "city"
    t.datetime "reservation_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reservations_on_user_id"
    t.index ["web_developer_id"], name: "index_reservations_on_web_developer_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "web_developers", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.text "description"
    t.integer "hourly_rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.string "linkedin_url"
    t.string "twitter_url"
    t.string "github_url"
    t.string "email"
    t.string "phone"
    t.string "city"
  end

  create_table "webdeveloper_skills", force: :cascade do |t|
    t.integer "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "web_developer_id", null: false
    t.bigint "skill_id", null: false
    t.index ["skill_id"], name: "index_webdeveloper_skills_on_skill_id"
    t.index ["web_developer_id"], name: "index_webdeveloper_skills_on_web_developer_id"
  end

  add_foreign_key "reservations", "users"
  add_foreign_key "reservations", "web_developers"
  add_foreign_key "webdeveloper_skills", "skills"
  add_foreign_key "webdeveloper_skills", "web_developers"
end
