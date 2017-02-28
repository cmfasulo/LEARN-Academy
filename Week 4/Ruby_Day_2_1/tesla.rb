class Tesla < Car
  def initialize(year)
    super
    @make = "Tesla"
  end

  def accelerate
    @speed = @speed + 10.00
  end

  def brake
    @speed = @speed - 7.00
  end

  def make
    @make
  end
end
