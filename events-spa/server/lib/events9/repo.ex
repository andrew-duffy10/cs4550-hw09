defmodule Events9.Repo do
  use Ecto.Repo,
    otp_app: :events9,
    adapter: Ecto.Adapters.Postgres
end
