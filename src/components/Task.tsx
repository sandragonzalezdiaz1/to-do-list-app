import type { TaskType } from "../types/TaskType";

// Definimos el tipo de las props que va a recibir el componente Task
type PropsTask = {
    task: TaskType, 
    deleteTask: () => void,
    toggleTask: () => void
}

export const Task = ({task, deleteTask, toggleTask} : PropsTask) => {
    return (
         <div className={`task ${task.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={toggleTask}
            />
            <span className="task-text">{task.text}</span>
            <button className="delete-btn" onClick={deleteTask}>Delete</button>
        </div>
    )
}