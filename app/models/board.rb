class Board < ActiveRecord::Base
  validates :user, :title, presence: true
  belongs_to :user
  has_many :lists, dependent: :destroy
end
