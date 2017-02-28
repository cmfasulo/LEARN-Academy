class UsersController < ApplicationController

  def index

  end

  def welcome

  end

  def registration

    #if session[:user] does not exist, run the block below
      # name = params[:name]
      # street_address = params[:street_address]
      # city = params[:city]
      # state = params[:state]
      # postalCode = params[:postal_code]
      # country = params[:country]
      # email = params[:email]
      # userId = params[:user_id]
      # password = params[:password]

      # @user = User.new(name, street_address, city, state, postal_code, country, email, user_id, password)
      # session[:user] = @user.to_yaml


    #else, if session[:user] has just be sent, redirect to welcome page
      # redirect_to 'users/welcome'


  end
end
