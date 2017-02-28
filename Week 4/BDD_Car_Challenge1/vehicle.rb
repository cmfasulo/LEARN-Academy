class Vehicle

  def initialize(year)
    @year = year
    @lights_on = false
    @signal = "off"
  end

  def year
    @year
  end

  def lights_on?
    @lights_on
  end

  def lights_on=(boolean)
    @lights_on = boolean
  end

  def signal=(direction)
    @signal = direction
  end

  def signal
    @signal
  end

  def attributes
    self.instance_variables.map do |attribute|
      { attribute => self.instance_variable_get(attribute) }
    end
  end

end
