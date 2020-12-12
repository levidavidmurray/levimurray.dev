namespace :posts do

  desc "Bulk upload projects"
  task bulk: :environment do

    data = YAML.load(File.read('dummy/dummy_data.yml')).map { |p| p.deep_symbolize_keys }

    data.each do |p|
      Project.transaction do
        begin
          project_id = p[:project_id]

          project = Project.find_by_project_id(project_id)
          if project.nil?
            project = Project.new
          end

          project.update(
            title: p[:title],
            project_id: project_id,
            subtitle: p[:subtitle],
            description: p[:description],
            summary: p[:summary],
            source_url: p[:links][:source],
            project_url: p[:links][:project],
          )

          # attach thumbnail if present
          if p[:thumbnail].present?
            if File.exist?(p[:thumbnail])
              if project.thumbnail.attached?
                project.thumbnail.purge
              end

              ext = File.extname(p[:thumbnail])
              project.thumbnail.attach(io: File.open(p[:thumbnail]), filename: "#{project_id}-thumbnail#{ext}")
            end
          end

          # attach all showcase images & videos
          unless p[:images].blank?
            if project.showcase_images.attached?
              project.showcase_images.purge
            end

            files = p[:images].map do |path|
              if File.exist?(path)
                {io: File.open(path), filename: "#{project_id}-#{File.basename(path)}"}
              end
            end

            project.showcase_images.attach(files)
          end

          project.save
        rescue Exception => e
          puts "Exception posting project: #{p[:project_id]} Exception: #{e}"
        end
      end
    end

  end

end
