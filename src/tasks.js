import { useState } from "react";

const Tasks = () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([]);

    const getTask = (event) => {
        setTaskName(event.target.value)
    }

    const addTask = () => {
        if(taskName !== "") {
            tasks.push(taskName)
            setTasks(tasks);
            setTaskName('')
        }
    }

    const deleteTask = (i) => {
        setTasks(tasks.filter((_, id) => id !== i))
    }

    const editTasks = (task) => {
        // const updatedTasks = tasks.map(t => t.id === task.id ? {..task, })
    }

    return (
        <div>
            <input onChange={getTask} className="border-2 border-red-400 rounded m-2"/>
            <button onClick={addTask} className="bg-blue-300 p-1 rounded">Add</button>
            {tasks.map((task,index) => (
                <p key={index}> {index}. {task} <span><button onClick={() => deleteTask(index)}>X</button></span> <span><button onClick={() => editTasks(task)}>edit</button></span></p>
            ))}
        </div>
    )
}

export default Tasks;