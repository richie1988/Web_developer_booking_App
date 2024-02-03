class WebdeveloperSkill < ApplicationRecord
  belongs_to :web_developer
  belongs_to :skill
  validates :level, presence: true
end
