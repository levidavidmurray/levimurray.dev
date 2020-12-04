# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Portfolio::Application.default_url_options = Portfolio::Application.config.action_mailer.default_url_options

Rails.application.configure do
  config.active_storage.replace_on_assign_to_many = false
end
