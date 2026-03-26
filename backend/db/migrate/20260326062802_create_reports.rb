class CreateReports < ActiveRecord::Migration[8.1]
  def change
    create_table :reports do |t|
      t.date :date, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
