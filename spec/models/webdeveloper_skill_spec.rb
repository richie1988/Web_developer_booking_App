require 'rails_helper'
RSpec.describe WebdeveloperSkill, type: :model do
  @skill = Skill.create(name: 'React')
  @webdeveloper=WebDeveloper.create(name: 'Kranko',title:"Frontend Developer",description:"A multi talented developer with 4 years of experience",hourly_rate:50,image_url:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/06/person-at-computer.jpeg.jpg",
  linkedin_url:"https://www.linkedin.com/in/samuel-munguti/",twitter_url:"https://twitter.com/samuelmunguti9",
  github_url:"https://github.com/Samuelwanza",city:"kigali",phone:"+254768331257",email:"example3@gmail.com")
  subject { WebdeveloperSkill.new(level:5, web_developer_id:@webdeveloper, skill_id:@skill) }
  before { subject.save }
  it 'level should be present have some inclusion' do
    subject.level = nil
    expect(subject).to_not be_valid
  end

end
