import React, { useState } from 'react'
import Header from '../Header'

export default function TrackTasks() {
    const [todos, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("completed");

    return (
        <>
            <Header />
            <div className='text-5xl font-bold'>TrackTasks</div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setTodo([...todos,
                {
                    task: task,
                    status: status
                }
            ]);}}>
                <label className='p-3 m-3'>Task</label>
                <input placeholder='Add task' required type='text' value={task}
                onChange={(e) => {
                  setTask(e.target.value);}}/>
                  <select  required value={status}
                  onChange={(e) =>{
                    setStatus(e.target.value);
                  }}>
                    <button type="Add items">Add items</button>
                    <button type="Delete items">Delete items</button>

                  </select>
               

            </form>







        </>
    )
}
