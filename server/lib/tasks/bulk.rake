namespace :posts do

  desc "Bulk upload projects"
  task bulk: :environment do

    data = YAML.load(File.read('dummy/dummy_data.yml')).map{|p|p.deep_symbolize_keys}

    data.each do |p|
      Project.transaction do
        begin
          if Project.find_by_project_id(p[:project_id]).nil?
            project = Project.new(
              title: p[:title],
              project_id: p[:project_id],
              subtitle: p[:subtitle],
              description: p[:description],
              summary: p[:summary],
              source_url: p[:links][:source],
              project_url: p[:links][:project],
            )
            thumbnail = File.open("dummy/#{project.project_id}/thumbnail.jpg")
            project.thumbnail.attach(io: thumbnail, filename: "#{project.project_id}-thumbnail.jpg")
            project.save

          end
        rescue Exception => e
          puts "Exception posting project: #{p[:project_id]} Exception: #{e}"
        end
      end
    end

  end

end
