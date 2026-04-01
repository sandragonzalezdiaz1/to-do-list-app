import { Task } from "./Task"
import type { TaskType } from "../types/TaskType";

type PropsTasksList = {
  tasksList: TaskType[],
  deleteTask: (index:number) => void,
  toggleTask: (index:number) => void
}

export const TasksList = ({tasksList, deleteTask, toggleTask} : PropsTasksList) => {
  return (
    <div className="taskList">
      { tasksList.length === 0 ? (
        <p className="empty-message">No tasks available</p>
      ): (
        tasksList.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            deleteTask={() => deleteTask(index)}
            toggleTask={() => toggleTask(index)}
            />
        )) 
      )}
    </div>
    
  )
}