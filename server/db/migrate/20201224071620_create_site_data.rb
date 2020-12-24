class CreateSiteData < ActiveRecord::Migration[6.0]
  def change
    create_table :site_data, id: :uuid do |t|
      t.timestamps
      t.string :about_me_html
      t.string :about_me_md
    end
  end
end
