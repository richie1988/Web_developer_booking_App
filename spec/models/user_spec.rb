RSpec.describe User, type: :model do
    subject { User.new(username: 'test_user') }
  
    describe 'validations' do
      it 'validates the presence of username' do
        subject.username = nil
        expect(subject).not_to be_valid
      end
  
      it 'validates the uniqueness of username' do
        described_class.create(username: 'test_user')
        expect(subject).not_to be_valid
      end
    end
  end
  