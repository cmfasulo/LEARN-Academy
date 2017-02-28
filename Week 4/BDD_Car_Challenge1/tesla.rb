require_relative 'car'

class Tesla < Car

  def initialize(year)
    super
    @horn = "Beep-bee-bee-boop-bee-doo-weep"
    @faster = 10.0
    @slower = 7.0
    @make = "Tesla"
  end

  def store
    @garage << [@year, "Tesla"]
  end

end
