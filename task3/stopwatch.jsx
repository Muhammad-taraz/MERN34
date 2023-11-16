import { useState } from 'react'
import './App.css'

function Counter () {
  const [seconds, setSeconds] = useState(0)
  const startTimer = () => {
    setInterval(()=> {
      setSeconds((seconds) => seconds+1)
    },1000 )
  }
  

  

  return (
    <>
      <div className='text-7xl font-bold '>Counter:
      {Math.floor(seconds /60)} : {seconds % 60}
      <button onClick={startTimer}>Start</button>
      </div>
    </>
  )
}

export default Counter
