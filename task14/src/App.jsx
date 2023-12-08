import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Leaderboard from './LeaderBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Leaderboard />
    </>
  )
}

export default App
