class Apartment < ActiveRecord::Base
  geocoded_by :full_address
  after_validation :geocode
  belongs_to :user
  validates :user, presence: true # add this
  resourcify

  def full_address
    self.street1 + " " + self.street2 + " " + self.city + " " + self.postal + " " + self.state + " " + self.country
  end

end
