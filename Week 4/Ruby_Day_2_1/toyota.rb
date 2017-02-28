class Toyota < Car
  def initialize(year)
    super
    @make = "Toyota"
  end

  def accelerate
    @speed = @speed + 7.00
  end

  def brake
    @speed = @speed - 5.00
  end

  def make
    @make
  end
end
