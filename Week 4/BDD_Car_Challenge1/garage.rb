# require_relative 'vehicle'
# require_relative 'car'
# require_relative 'tesla'
# require_relative 'tata'
# require_relative 'toyota'

require_relative 'vehicle'
require_relative 'car'
require_relative 'tesla'
require_relative 'tata'
require_relative 'toyota'

class Garage

  def initialize
    @collection = []
  end

  def collection
    @collection
  end

  def park(car)
    @collection << car
  end

end
