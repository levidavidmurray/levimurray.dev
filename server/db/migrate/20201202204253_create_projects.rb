class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects, id: :uuid do |t|
      t.timestamps
      t.string :title
      t.string :project_id
      t.string :subtitle
      t.text :description
      t.string :summary
      t.string :source_url
      t.string :project_url
    end

    add_index :projects, [:project_id], unique: true
  end
end
