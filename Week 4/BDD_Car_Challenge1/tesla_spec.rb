require 'rspec'
require_relative 'tesla'

describe "Tesla" do
  it "has to not fail upon creation" do
    expect{Tesla.new(0)}.to_not raise_error
  end

  it "has to beep ba doop it up" do
    t = Tesla.new(0)
    expect(t.honk_horn).to eq "Beep-bee-bee-boop-bee-doo-weep"
  end

  it "has to have a model year" do
    t = Tesla.new(0)
    expect(t.year).to be_a Numeric
  end

  it "has to have lights" do
    t = Tesla.new(0)
    expect(t.lights_on?).to be false
    expect(t.lights_on = true ).to be true
  end

  it "has a turn signal" do
    t = Tesla.new(0)
    expect(t.signal).to eq "off"
    t.signal = "left"
    expect(t.signal).to eq "left"
    t.signal = "right"
    expect(t.signal).to eq "right"
  end

  it "accelerated by 10 km/h" do
    t = Tesla.new(0)
    expect{t.accel}.to change{t.speed}.from(0).to(10)
  end

  it "braked by 7 km/h" do
    t = Tesla.new(0)
    t.accel
    expect{t.brake}.to change{t.speed}.from(10.0).to(3.0)
  end

  it "has to print out all attributes of variables" do
    t = Tesla.new(0)
    expect{t.attributes}.to_not raise_error
  end

end
