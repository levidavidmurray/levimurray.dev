class SiteData < ApplicationRecord

  default_scope { order(created_at: :asc) }

  has_one_attached :resume_pdf
  has_one_attached :resume_thumbnail

end
