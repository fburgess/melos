class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :total
      t.belongs_to :customer, null: false, foreign_key: true
      t.belongs_to :menu_item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
