import { Task } from "./Task"


type PropsTasksList = {
  tasksList: string[],
  deleteTask: (index:number) => void
}

export const TasksList = ({tasksList, deleteTask} : PropsTasksList) => {
  return (
    <div className="taskList">
      { tasksList.length === 0 ? (
        <p className="empty-message">No tasks available</p>
      ): (
        tasksList.map((task, index) => (
          <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
        )) 
      )}
    </div>
    
  )
}