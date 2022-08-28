// Imports
import { createContext, useState, useEffect } from "react"
import {tasks as data} from '../data/tasks.js'

// Creamos el nombre del contexto
export const TaskContext = createContext() // retorna un objeto

// Creamos el contexto
export const TaskContextProvider = (props) => {
    // STATES
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data);
      }, []);


    // FUNCIONES
    const createTask = (task) => {
        setTasks([...tasks, {
        id: tasks.length,
        title: task.title,
        description: task.description
        }])
    }
    const deleteTask = (id) => {
        let filterTasks = tasks.filter((task) => task.id !== id);
        setTasks(filterTasks);
    }


    return (
        <TaskContext.Provider value={{
          tasks,
          deleteTask,
          createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}