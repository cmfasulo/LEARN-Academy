require_relative 'vehicle'

class Car < Vehicle

  def initialize(year)
    super
    @wheels = 4
    @horn = "BEEP!"
    @speed = 0
    @faster = 0.0
    @slower = 0.0
    @make = ""
  end

  def wheels=(wheels)
    @wheels = wheels
  end

  def wheels
    @wheels
  end

  def honk_horn
    @horn
  end

  def horn=(horn)
    @horn = horn
  end

  def horn
    @horn
  end

  def speed
    @speed
  end

  def accel
    @speed = @speed + @faster
  end

  def brake
    @speed = @speed - @slower
  end

  def make
    @make
  end

end
