import React, { useState } from 'react'
import Header from '../Header'

export default function TrackTasks() {
    const [todos, setTodo] = useState([]);  
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("Add");

    return (
        <>
            <Header />
            <div className='text-5xl font-bold'>TrackTasks
            <form onSubmit={(e) => {
                e.preventDefault();
                setTodo([...todos,{task:"task"}])
                }}>
                <label className='p-3 mt-5'>Task</label>
                <input className='mt-5' placeholder='Add task' required type='text' value={task}
                onChange={(e) => {
                  setTask(e.target.value);}}/>
                 
                  
                  
                  <div className='flex gap-5 mt-5'>
                   <button type='Add' className='bg-slate-500 rounded-md hover:bg-slate-950 border-black'>Add items</button>
                   
                    </div>

            </form>
            <div>
                {todos.map ((item,index) => {
                    return (
                        <div key={index} > 
                            <span>{item.task}</span>
                            <span>{item.status}</span>
                            <button type='delete' className='bg-slate-500 rounded-md hover:bg-slate-950 border-black p-3 gap-5 mt-5' onClick={()=>{

                                const remove = todos.filter((todoItem, i) => {
                                    return i != index;
                                })
                                setTodo (remove);
                            }}>Delete</button>
                            </div>
                    );
                  
                })}

                
            </div>
           </div>
        </>
    )
}
