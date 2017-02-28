require 'rails_helper'

RSpec.feature "Registration", type: :feature do
  context 'Going to registration page' do
    Steps 'Allow new user to register' do
      Given 'I am on the registration page' do
        visit '/users/registration'
      end
      Then 'I can see a registration message' do
        expect(page).to have_content("Enter Registration Information Below")
      end
      When 'I will enter registration information' do
        fill_in 'full_name', with: 'Tom Jones'
        fill_in 'street_address', with: '123 Main st'
        fill_in 'city', with: 'San Diego'
        fill_in 'state', with: 'California'
        fill_in 'postal_code', with: '92109'
        fill_in 'country', with: 'Merica'
        fill_in 'email', with: 'Tom_jones@gmail.com'
        fill_in 'user_id', with: 'TomJones'
        fill_in 'password', with: '123'
      end
      And 'Submit' do
        click_button 'Submit'
      end
      Then 'I am redirected to the welcome page' do
        '/user/welcome'
      end
    end
  end
end
