json.extract!(@board, :title, :id)
json.lists do 
  json.array! @board.lists do |list|
    json.extract!(list, :id, :title, :ord)
    json.cards do 
      json.array! list.cards do |card|
        json.extract!(card, :title, :id, :ord, :description)
      end
    end
  end
end