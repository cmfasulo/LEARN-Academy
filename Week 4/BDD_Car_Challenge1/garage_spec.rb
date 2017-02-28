require 'rspec'
require_relative 'garage'

describe "Garage" do

  # Create garage
  before(:each) do
    @g = Garage.new
  end

  # Create cars
  before(:all) do
    @tesla1 = Tesla.new 2018
    @tesla2 = Tesla.new 1362
    @tata1 = Tata.new 2045
    @tata2 = Tata.new 2008
    @toyota1 = Toyota.new 175
    @toyota2 = Toyota.new 10
  end

  it "has to create garage" do
    expect{@g}.to_not raise_error
  end

  it "has to initialize empty garage" do
    expect(@g.collection).to match_array([])
  end

  it "has to create tesla1" do
    expect(@tesla1.year).to eq 2018
  end

  it "has to put car in garage" do
    @g.park(@tesla1)
    @g.park(@tesla2)
    @g.park(@tata1)
    @g.park(@tata2)
    @g.park(@toyota1)
    @g.park(@toyota2)
    expect(@g.collection).to match_array([@tesla1, @tesla2, @tata1, @tata2, @toyota1, @toyota2])
  end

  it "has to sort the collection by year" do
    @g.park(@tesla1)
    @g.park(@tesla2)
    @g.park(@tata1)
    @g.park(@tata2)
    @g.park(@toyota1)
    @g.park(@toyota2)
    @yearsort = @g.collection.sort { |x,y| x.year <=> y.year }
    expect(@yearsort).to match_array([@toyota2, @toyota1, @tesla2, @tata2, @tesla1, @tata1])
  end

  it "has to sort the collection by make" do
    @g.park(@tesla1)
    @g.park(@tesla2)
    @g.park(@tata1)
    @g.park(@tata2)
    @g.park(@toyota1)
    @g.park(@toyota2)
    @g.collection.sort { |x,y| [x.make, x.year] <=> [y.make, y.year] }
    expect(@g.collection).to match_array([@tata2, @tata1, @tesla2, @tesla1, @toyota2, @toyota1])
  end

end
