import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-7xl font-bold'>Responsiveness</h1>
     
      <div className='container'>
       
        <div className='lg:flex gap-20 mt-5'>
          <div className=' bg-red-500 mt-2 p-2 h-20 border-black lg:w-1/2 w-full'></div>
          <div className=' bg-red-500 mt-2 p-2 h-20 border-black lg:w-1/2 w-full'></div>
        </div>
       
           <div className='bg-blue-500 border-black mt-5 p-3 h-20'></div>

           <div className='lg:flex gap-20'>
            <div className=' bg-green-500 mt-5 p-2 h-20 border-black lg:w-1/3 w-full'></div>
            <div className=' bg-green-500 mt-5 p-2 h-20 border-black lg:w-1/3 w-full'></div>
            <div className=' bg-green-500 mt-5 p-2 h-20 border-black lg:w-1/3 full'></div>
           </div>

           <div className='lg:flex gap-20'>
            <div className=' bg-yellow-500 mt-5 p-2 h-20 border-black lg:w-1/4 md:w-1/2 w-full'></div>
            <div className=' bg-yellow-500 mt-5 p-2 h-20 border-black lg:w-1/4 md:w-1/2 w-full'></div>
            <div className=' bg-yellow-500 mt-5 p-2 h-20 border-black lg:w-1/4 md:1/2 w-full'></div>
            <div className=' bg-yellow-500 mt-5 p-2 h-20 border-black lg:w-1/4 md:1/2 w-full'></div>
           </div>
       

        </div>
    </>
  )
}

export default App
