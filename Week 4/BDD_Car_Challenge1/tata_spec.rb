require 'rspec'
require_relative 'tata'

describe "Tata" do

  it "has to not fail upon creation" do
    expect{Tata.new(0)}.to_not raise_error
  end

  it "has to beep it up" do
    t = Tata.new(0)
    expect(t.honk_horn).to eq "beep"
  end

  it "has to have a model year" do
    t = Tata.new(0)
    expect(t.year).to be_a Numeric
  end

  it "has to have lights" do
    t = Tata.new(0)
    expect(t.lights_on?).to be false
    expect(t.lights_on = true ).to be true
  end

  it "has a turn signal" do
    t = Tata.new(0)
    expect(t.signal).to eq "off"
    t.signal = "left"
    expect(t.signal).to eq "left"
    t.signal = "right"
    expect(t.signal).to eq "right"
  end

  it "accelerated by 2 km/h" do
    t = Tata.new(0)
    expect{t.accel}.to change{t.speed}.from(0).to(2.00)
  end

  it "braked by 1.25 km/h" do
    t = Tata.new(0)
    t.accel
    expect{t.brake}.to change{t.speed}.from(2.00).to(0.75)
  end

  it "has to print out all attributes of variables" do
    t = Tata.new(0)
    expect{t.attributes}.to_not raise_error
  end

end
