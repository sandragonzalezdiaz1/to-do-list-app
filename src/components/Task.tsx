// Definimos el tipo de las props que va a recibir el componente Task
type PropsTask = {
    task: string, 
    deleteTask: () => void
}

export const Task = ({task, deleteTask} : PropsTask) => {
    return (
        <div className="task">
            <span className="task-text">{task}</span>
            <button className="delete-btn" onClick={deleteTask}>Delete</button>
        </div>
    )
}