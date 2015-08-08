class Card < ActiveRecord::Base
  validates :list, :title, :ord, presence: true
  belongs_to :list
  has_many :items, dependent: :destroy
end
