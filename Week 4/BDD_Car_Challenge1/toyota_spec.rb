require 'rspec'
require_relative 'toyota'

describe "Toyota" do

  it "has to not fail upon creation" do
    expect{Toyota.new(0)}.to_not raise_error
  end

  it "has to whoop it up" do
    t = Toyota.new(0)
    expect(t.honk_horn).to eq "whoop"
  end

  it "has to have a model year" do
    t = Toyota.new(0)
    expect(t.year).to be_a Numeric
  end

  it "has to have lights" do
    t = Toyota.new(0)
    expect(t.lights_on?).to be false
    expect(t.lights_on = true ).to be true
  end

  it "has a turn signal" do
    t = Toyota.new(0)
    expect(t.signal).to eq "off"
    t.signal = "left"
    expect(t.signal).to eq "left"
    t.signal = "right"
    expect(t.signal).to eq "right"
  end

  it "accelerated by 7 km/h" do
    t = Toyota.new(0)
    expect{t.accel}.to change{t.speed}.from(0).to(7.0)
  end

  it "has to print out all attributes of variables" do
    t = Toyota.new(0)
    expect{t.attributes}.to_not raise_error
  end

  it "braked by 5 km/h" do
    t = Toyota.new(0)
    t.accel
    expect{t.brake}.to change{t.speed}.from(7.0).to(2.0)
  end

end
