class User
  def initialize(name, street_address, city, state, postal_code, country, email, user_id, password)
    @name = name
    @streetAddress = street_address
    @city = city
    @state = state
    @postalCode = postal_code
    @country = country
    @email = email
    @userId = user_id
    @password = password
  end

  def name
    @name
  end

  def street_address
    @street_address
  end

  def city
    @city
  end

  def state
    @state
  end

  def postal_code
    @postal_code
  end

  def country
    @country
  end

  def email
    @email
  end

  def user_id
    @user_id
  end

  def password
    @password
  end

end
