# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :events9,
  ecto_repos: [Events9.Repo]

# Configures the endpoint
config :events9, Events9Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "uhB7Ez2DPobgeRF40R4RYuqLaSRpNjaCEMeAnLjJJOT5tMytY5+ctoMo6Lr9gX1Y",
  render_errors: [view: Events9Web.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Events9.PubSub,
  live_view: [signing_salt: "qpn+5lUv"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
