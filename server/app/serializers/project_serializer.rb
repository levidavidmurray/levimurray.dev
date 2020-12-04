class ProjectSerializer < ActiveModel::Serializer

  attributes :id, :title, :project_id, :subtitle, :description,
             :summary, :source_url, :project_url, :thumbnail, :showcase_images

  def thumbnail
    resized = object.thumbnail.variant(resize_to_limit: [480, 480]).processed
    blob = resized.blob
    {
      filename: blob.filename,
      content_type: blob.content_type,
      byte_size: blob.byte_size,
      created_at: blob.created_at,
      link: Rails.application.routes.url_helpers.rails_representation_url(resized)
    }
  end

  def showcase_images
    mapped = object.showcase_images.map do |attachment|
      blob = attachment.blob
      {
        filename: blob.filename,
        content_type: blob.content_type,
        byte_size: blob.byte_size,
        created_at: blob.created_at,
        link: Rails.application.routes.url_helpers.rails_blob_url(blob, disposition: :inline)
      }
    end
    mapped.sort_by!{|a| a[:created_at]}
    mapped
  end

end
