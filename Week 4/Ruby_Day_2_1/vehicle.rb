class Vehicle
  def initialize(year)
    @year = year
    @lights_on = false
    @turn_signal = "off"
  end

  def year
    @year
  end

  def lights_on=(boolean)
    @lights_on = boolean
  end

  def lights_on?
    @lights_on
  end

  def turn_signal=(direction)
    @turn_signal = direction
  end

  def turn_signal
    @turn_signal
  end
end

cars.sort { |x.year,y.year| x <=> y }
