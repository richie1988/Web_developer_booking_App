require 'rails_helper'
RSpec.describe WebDeveloper, type: :model do
  subject { WebDeveloper.new(name: 'Kranko',title:"Frontend Developer",description:"A multi talented developer with 4 years of experience",hourly_rate:50,image_url:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/06/person-at-computer.jpeg.jpg",
  linkedin_url:"https://www.linkedin.com/in/samuel-munguti/",twitter_url:"https://twitter.com/samuelmunguti9",
  github_url:"https://github.com/Samuelwanza",city:"kigali",phone:"+254768331257",email:"example3@gmail.com") }
  before { subject.save }
  it 'name should be present have some inclusion' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'title should be present have some inclusion' do
    subject.title = nil
    expect(subject).to_not be_valid
  end
  it 'description should be present have some inclusion' do
    subject.description = nil
    expect(subject).to_not be_valid
  end
  it 'image_url should be present have some inclusion' do
    subject.image_url = nil
    expect(subject).to_not be_valid
  end

  it 'hourly_rate  should be a integer' do
    subject.hourly_rate = 'not an integer'
    expect(subject).to_not be_valid
  end
  it 'hourly_rate should be greater than 0' do
    subject.hourly_rate = -3
    expect(subject).to_not be_valid
  end
  
end
