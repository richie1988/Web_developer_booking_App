class WebDeveloper < ApplicationRecord
    validates :name, presence:true
    validates :title, presence:true
    validates :description, presence:true
    validates :hourly_rate, presence:true, numericality: { only_integer: true, greater_than: 0 }
    validates :image_url, presence:true, format: URI::DEFAULT_PARSER.make_regexp(%w[http https])
    has_many :webdeveloper_skills
end
