class Project < ApplicationRecord

  default_scope { order(created_at: :asc) }

  has_one_attached :thumbnail
  has_many_attached :showcase_images

end
