require 'rspec'
require_relative 'tasklist'
require_relative 'task'
require_relative 'duedatetask'

describe "TaskList" do

  #Create a new instance of the Tasklist class (@list), create four instances Task class (@t1. @t2, @t3, @t4), and shovel each task into their corresponding TaskList array before EVERY test; this ensures the Tasklist starts empty for EACH test
  before(:each) do

    @list = TaskList.new

    #New Tasks to remain incomplete(@done = false, no due dates)
    @t1 = Task.new("Task1","This is a test task, DONT DO IT IDIOT")
    @t2 = Task.new("Task2","This is a test task, DONT DO IT IDIOT")

    #New Tasks to be marked complete(@done = true, no due dates)
    @t3 = Task.new("Task3","This is a test task, DONT DO IT IDIOT")
    @t3.done = true

    @t4 = Task.new("Task4","This is a test task, DONT DO IT IDIOT")
    @t4.done = true

    #New DueDateTasks to remain incomplete (@done = false, due date specified)
    @due1 = DueDateTask.new("task_due1","task_desc1", 1, 1, 1001)
    @due2 = DueDateTask.new("task_due2","task_desc2", 2, 2, 1002)

     #TaskList method (tasklist.rb), shovels into 'incomplete' array
    @list.add_incomplete @t1
    @list.add_incomplete @t2

    #TaskList method (tasklist.rb), shovels into 'completed' array
    @list.add_completed @t3
    @list.add_completed @t4

    #TaskList method (tasklist.rb), shovels into 'master_list' array
    @list.add_master_list @t1
    @list.add_master_list @t2
    @list.add_master_list @t3
    @list.add_master_list @t4
    @list.add_master_list @due1
    @list.add_master_list @due2

  end #before(:each)

  #Test: creating a new TaskList class instance does not result in an error
  it "doesn't fail upon creation" do
    expect{TaskList.new}.to_not raise_error
  end

  #Test: each task is properly shoveled into their appropriate arrays based on completeness
  it "should add tasks to appropriate arrays" do
    expect(@list.incomplete).to eq([@t1, @t2])
    expect(@list.completed).to eq([@t3, @t4])
  end

  it "should sort tasks by due date" do
    @list.sort_by_date
    expect(@list.master_list).to eq([@t1, @t2, @t3, @t4, @due1, @due2])
  end

end #describe "TaskList"
