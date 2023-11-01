import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colors, setColors] = useState()

  return (
    <>
      <div className='container'>
        <div className='circle'></div>
         <div className='wrapper'>
         <div className='circle1'></div>
         <div className='circle1'></div>
         <div className='circle1'></div>
         <div className='circle1'></div>
         <div className='circle1'></div>
         
         </div>
         <button onClick={()=>alert("ALL") }>reload</button>
      </div> 
    </>
  )
}

export default App
