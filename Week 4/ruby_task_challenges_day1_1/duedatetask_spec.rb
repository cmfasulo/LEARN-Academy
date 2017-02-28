require 'rspec'
require_relative 'duedatetask'

describe "DueDateTask" do

  #Create a new instance of the Tasklist class (@list), create two instances Task class (@t1 and @t2), create two instances of DueDateTask class (@due1 and @due2), and shovel each task into their corresponding TaskList array before EVERY test; this ensures the Tasklist starts empty for EACH test
  before(:each) do
    @list = TaskList.new

    #New Task to be marked complete (@done = true, no due dates)
    @t1 = Task.new("Task1","This is a test task, DONT DO IT IDIOT")
    @t1.done = true

    #New Task to be remain incomplete (@done = false, no due date)
    @t2 = Task.new("Task2","This is a test task, DONT DO IT IDIOT")

    #New DueDateTask to be marked complete (@done = true)
    @due1 = DueDateTask.new("task_due","task_desc", 1, 1, 1001)
    @due1.done = true

    #New DueDateTask to remain incomplete (@done = false)
    @due2 = DueDateTask.new("task_due","task_desc", 2, 2, 1002)

    #TaskList methods (tasklist.rb), shovels tasks into appropriate arrays
    @list.add_completed @t1
    @list.add_incomplete @t2
    @list.due_add_completed @due1
    @list.due_add_incomplete @due2

  end #before(:each)

  #Test: new instance of the DueDateTask class (due1) initializes a 'todo' instance variable (which is inherited from parent class 'Task')
  it "should have a todo (task_due)" do
    expect(@due1.todo).to eq "task_due"
  end

  #Test: @details instance variable interpolates correctly
  it "should print out an item with labels, including due date" do
    expect(@due1.details).to eq "ToDo: #{@due1.todo} ; Description: #{@due1.description} ; Due Date: #{@due1.duedate}"
  end

  #Test: each task is properly shoveled into their appropriate arrays based on completeness and due date
  it "should add tasks to appropriate arrays" do
    expect(@list.incomplete).to eq([@t2])
    expect(@list.completed).to eq([@t1])
    expect(@list.due_incomplete).to eq([@due2])
    expect(@list.due_completed).to eq([@due1])
  end

end #describe "DueDateTask"
