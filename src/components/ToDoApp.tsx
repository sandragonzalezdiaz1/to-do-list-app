import { useState } from "react";
import { TasksList } from "./TasksList";
import './ToDoApp.css';
import type { TaskType } from "../types/TaskType";

export const ToDoApp = () => {

    const [newTask, setNewTask] = useState<string>('');
    const [tasksList, setTaskList] = useState<TaskType[]>([]);

    const handleAddTask = () => {
        if(newTask.trim() == '') return; // Si el input esta vacio, salimos de la funcion
        setTaskList(previewTasks => [...previewTasks, {text: newTask, completed: false}]); // Agregamos la nueva tarea a la lista de tareas
        setNewTask(''); // Limpiamos el input
    }

    const handleDeleteTask = (index: number) => {
        // Devuelve todas las tareas que no correspondan a ese indice, es decir, elimina solo la tarea que coincide con el indice
        setTaskList(tasks => tasks.filter((_, i) => i !== index)); 

    }

    const handleToggleTask = (index: number) => {
        setTaskList(tasks => 
                tasks.map((task, indexTask) => 
                    // Si el indice coincide, entonces cambiamos el estado de completada a no completada o viceversa,
                    // en caso contrario, dejamos la tarea igual
                    indexTask == index ? {...task, completed: !task.completed} : task 
                )
            ) 
    }
    

    return (
        <div className="to-do-app">
            <div className="app-card">
            <h1 className="title">✨ My Tasks</h1>
                <div className="input-container">
                    <input 
                        type="text"
                        className="task-input"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="New task" 
                    />
                    <button className="add-btn" onClick={handleAddTask}>Add</button>
                </div>
                <TasksList tasksList={tasksList} deleteTask={handleDeleteTask} toggleTask={handleToggleTask}></TasksList>
            </div>
        </div>
    )
}