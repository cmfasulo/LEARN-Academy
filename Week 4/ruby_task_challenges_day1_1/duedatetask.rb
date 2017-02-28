require 'date' #used for @duedate instance variable
require_relative 'task' #task is parent of this (duedatetask) class
require_relative 'tasklist' #needed in this class's testing file: duedatetask_spec.rb (utilizes the 'Tasklist' class)

class DueDateTask < Task #child of 'Task' class

  def initialize(todo, description, month, day, year) #todo/description => same arguments as parent, month/day/year ==> new arguments for this class

    super todo, description #Pass inherited initialize arguments back to parent -- "super" alone would try to pass all five arguments above to parent, which only takes the first two

    @duedate = Date.new(year, month, day) #Use Ruby's built-in Date class to generate a date

    @details = "ToDo: #{@todo} ; Description: #{@description} ; Due Date: #{@duedate}" #Aggregates all pertinent data into single string
  end

  def details #details getter
    @details
  end

end #class DueDateTask
