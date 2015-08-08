class List < ActiveRecord::Base
  validates :board, :title, :ord, presence: true
  belongs_to :board
  has_many :cards
end
