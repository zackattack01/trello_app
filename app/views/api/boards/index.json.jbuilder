json.array! @boards do |board|
  json.extract!(board, :title, :id)
end