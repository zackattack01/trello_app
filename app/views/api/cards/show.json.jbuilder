json.extract!(@card, :title, :id, :ord, :description)
json.items do 
  json.array! @card.items do |item|
    json.extract!(item, :id, :title, :completed)
  end
end