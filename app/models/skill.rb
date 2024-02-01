class Skill < ApplicationRecord
    validates :name, presence:true
    has_many :webdeveloper_skills
    
end
