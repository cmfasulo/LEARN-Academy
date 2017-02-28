require 'date' #used for @duedate instance variable

class Task #Parent class of 'DueDateTask'

  def initialize(todo, description) #Require to arugments for any new instance: title (@todo) and description (@description)
    @todo = todo
    @description = description
    @done = false #Initialize all new Task instances to incomplete (@done = false)
    @duedate = Date.new(0)
  end

  def todo #todo getter
    @todo
  end

  def description #description getter
    @description
  end

  def duedate #duedate getter
    @duedate
  end

  def done=(boolean) #Method for setting Task to complete (true) or incomplete (false)...this class initalizes to false, so this would only really be called when the task is completed

    if boolean == true #Upon completion (@done = true), @done is reassigned to return the interpolated string below
      @done = "ToDo: #{@todo} ; Description: #{@description}"
    end

  end

  def done? #done/completion status getter
    @done
  end

end #class Task
