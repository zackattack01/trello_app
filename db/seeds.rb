User.create({ username: 'admin', password: 'password' })
5.times do |i|
  board = Board.create({ title: "Board no. #{i + 1}", user_id: 1 })
  board_id = board.id
  5.times do |j|
    List.create({ title: "board #{i + 1}'s no. #{j + 1} list", board_id: board_id, ord: j })
  end
end

list = User.first.boards.first.lists.first
3.times do |i|
  Card.create({ title: "I'm card item #{i + 1}", list_id: list.id, ord: i, description: "something something card #{i + 1} something lorem ipsum something"})
end
