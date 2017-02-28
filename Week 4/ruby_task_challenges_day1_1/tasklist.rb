class TaskList #Class used to store all new Task and DueDateTask class instances

  def initialize
    #Initialize all empty arrays needed for sorting/testing task
    @completed = [] #COMPLETED tasks WITHOUT due dates
    @incomplete = [] #INCOMPLETE tasks WITHOUT due dates
    @due_completed = [] #COMPLETED tasks WITH due dates
    @due_incomplete = [] #INCOMPLETE tasks WITH due dates
    @master_list = [] #For sorting all tasks regardless of due dates/not
  end


#The below methods act as getters and setters for the specialized arrays (all 'add_...' methods essentially act as the setters for each array. These methods are utilized in 'tasklist_spec.rb' and 'duedatetask_spec.rb' testing files)

  def add_completed(task)
    @completed << task
  end

  def completed
    @completed
  end

  def add_incomplete(task)
    @incomplete << task
  end

  def incomplete
    @incomplete
  end

  def due_add_completed(task)
    @due_completed << task
  end

  def due_completed
    @due_completed
  end

  def due_add_incomplete(task)
    @due_incomplete << task
  end

  def due_incomplete
    @due_incomplete
  end

  def add_master_list(task)
    @master_list << task
  end

  def master_list
    @master_list
  end

  def sort_by_date
    @master_list.sort_by {|i| i.duedate}
  end

end #class TaskList
