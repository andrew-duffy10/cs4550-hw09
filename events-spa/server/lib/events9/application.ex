defmodule Events9.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Events9.Repo,
      # Start the Telemetry supervisor
      Events9Web.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Events9.PubSub},
      # Start the Endpoint (http/https)
      Events9Web.Endpoint
      # Start a worker by calling: Events9.Worker.start_link(arg)
      # {Events9.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Events9.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    Events9Web.Endpoint.config_change(changed, removed)
    :ok
  end
end
