namespace :site_data do

  desc "Bulk upload projects"
  task about_me: :environment do

    options = {
      autolink: true,
      tables: true,
      footnotes: true,
      superscript: true,
    }
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, options)
    about = File.read('/home/levi/about-me.md')

    site_data = SiteData.all.first

    if site_data.nil?
      site_data = SiteData.new
    end

    site_data.about_me_html = markdown.render(about)
    site_data.about_me_md = about
    site_data.save

  end

end
