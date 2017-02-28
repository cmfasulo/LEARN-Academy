require 'rspec'
require_relative 'car'

describe "Car" do

  it "has to not fail upon creation"  do
    expect{Car.new(0)}.to_not raise_error
  end

  it "has to have wheels" do
    c = Car.new(0)
    expect(c.wheels).to be_a Numeric
  end

  it "has to have a horn" do
    c = Car.new(0)
    expect(c.honk_horn).to eq "BEEP!"
  end

  it "has to have a model year" do
    c = Car.new(0)
    expect(c.year).to be_a Numeric
  end

  it "has to have lights" do
    c = Car.new(0)
    expect(c.lights_on?).to be false
    expect(c.lights_on = true ).to be true
  end

  it "has a turn signal" do
    c = Car.new(0)
    expect(c.signal).to eq "off"
    c.signal = "left"
    expect(c.signal).to eq "left"
    c.signal = "right"
    expect(c.signal).to eq "right"
  end

  it "has an initial speed of 0" do
    c = Car.new(0)
    expect(c.speed).to eq 0.0
  end

  it "has to print out all attributes of variables" do
    c = Car.new(0)
    expect{c.attributes}.to_not raise_error
  end

end
