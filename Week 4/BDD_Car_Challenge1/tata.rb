require_relative 'car'

class Tata < Car

  def initialize(year)
    super
    @horn = "beep"
    @faster = 2.00
    @slower = 1.25
    @make = "Tata"
  end

  def store
    @garage << [@year, "Tata"]
  end

  def retrieve
    @garage
  end

end
