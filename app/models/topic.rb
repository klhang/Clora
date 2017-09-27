class Topic < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :question_topic_links
  has_many :questions, through: :question_topic_links, source: :question

end
