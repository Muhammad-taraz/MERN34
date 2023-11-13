import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sawal from 'sweetalert2'


function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const Submit = (e) => {
    e.preventDefault();
    Sawal.fire(
      "form submitted",
      `Name:${name}, Email:${email}, Username:${username}, Password:${password}, Message:${message}`
    )
  }

  return (
    <>
    <div>
      <h1 className='text-5xl font-black'>Contact Form</h1>
    </div><br/><br/><br/><br/><br/>
    
      <div>
        <form onSubmit={Submit}>
          <input type='text' placeholder='Enter your name' required onChange={(e)=>{setName(e.target.value)}} className='bg-grey-192 gap-2.5 text-lg flex-col justify-center border-2'/><br/><br/>
          <input type='email'  placeholder='Enter your email' required onChange={(e)=>{setEmail(e.target.value)}} className='bg-grey-192 gap-2.5 text-lg flex-col justify-center border-2' /><br/><br/>
          <input type='username'  placeholder='Enter your username' required onChange={(e)=>{setUsername(e.target.value)}} className='bg-grey-192 gap-2.5 text-lg flex-col justify-center border-2'/><br/><br/>
          <input type='password'  placeholder='Enter your password' required onChange={(e)=>{setPassword(e.target.value)}} className='bg-grey-192 gap-2.5 text-lg flex-col justify-center border-2'/><br/><br/>
          <input type='message' required onChange={(e)=>{setMessage(e.target.value)}} className='text-7xl border-2 border-black ' />
          <br/><br/><br/><br/>
          <button className='bg-green-200 border-2 text-2xl'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
