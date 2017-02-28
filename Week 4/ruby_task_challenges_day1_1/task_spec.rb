require 'rspec'
require_relative 'task'

describe "Task" do

  #Generate a single instance of the Task class (@t) ONCE before all running tests
  before(:all) do
    @t = Task.new("Test_Task","This is a test task, DONT DO IT IDIOT")
  end

  #Test: creating a new Task class instance @t does not result in an error
  it "should not fail/show error" do
    expect{@t}.to_not raise_error
  end

  #Test: creating a new Task class instance @t initializes the completion status to incomplete (done? = false)
  it "should initialize task to incomplete (done=false)" do
    expect(@t.done?).to eq false
  end

  #Test: setting the Task @t to completed (done = true) reassigns the @done variable to the desired interpolated string
  it "should print that stuff we wanted it to if the task is complete" do
    @t.done= true
    expect(@t.done?).to eq "ToDo: #{@t.todo} ; Description: #{@t.description}"
  end

end #describe "Task"
