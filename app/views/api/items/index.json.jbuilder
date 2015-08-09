json.array! @items do |item|
  json.extract!(item, :title, :completed, :id)
end