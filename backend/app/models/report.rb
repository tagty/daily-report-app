class Report < ApplicationRecord
  validates :date, presence: true
  validates :body, presence: true
end
