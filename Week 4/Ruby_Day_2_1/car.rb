class Car < Vehicle
  def initialize(year)
    super
    @speed = 0.00
    @wheels = 4
  end

  def speed
    @speed
  end

  def wheels
    @wheels
  end
end
