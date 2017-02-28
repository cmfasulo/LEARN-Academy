require 'rspec'
require_relative 'vehicle'

describe "Vehicle" do

  it "has to not fail upon creation"  do
    expect{Vehicle.new(0)}.to_not raise_error
  end

  it "has to print out all attributes of variables" do
    v = Vehicle.new(0)
    expect{v.attributes}.to_not raise_error
  end

end
