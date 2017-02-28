class Tata < Car
  def initialize(year)
    super
    @make = "Tata"
  end

  def accelerate
    @speed = @speed + 2.00
  end

  def brake
    @speed = @speed - 1.25
  end

  def make
    @make
  end

  def all
    "The year is #{@year} and the make is #{@make} and it's going #{@speed}MPH and the turn signal is #{@turn_signal} and it has #{@wheels} wheels. Oh, and are the lights on you ask? #{@lights_on}."
  end

end
