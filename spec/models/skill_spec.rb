require 'rails_helper'
RSpec.describe Skill, type: :model do
  subject { Skill.new(name: 'Rails') }
  before { subject.save }
  it 'name should be present have some inclusion' do
    subject.name = nil
    expect(subject).to_not be_valid
  end
end
