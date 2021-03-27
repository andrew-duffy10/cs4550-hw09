# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Events9.Repo.insert!(%Events9.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Events9.Repo
alias Events9.Users.User
alias Events9.Events.Event

andrew = Repo.insert!(%User{name: "andrew", password_hash: ""})
joe = Repo.insert!(%User{name: "joe", password_hash: ""})

birthday = Repo.insert!(%Event{name: "Birthday!", date: ~D[1999-05-18]})