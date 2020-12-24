class SiteDataController < ApplicationController

  # GET /projects
  def index
    @site_data = SiteData.all.first
    render json: @site_data
  end

end
