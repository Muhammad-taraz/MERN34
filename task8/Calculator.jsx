import React, { useState } from 'react'
import Sawal from 'sweetalert2'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Caculator () {
   const [firstValue, setFirstValue] = useState(0);
   const [secondValue, setSecondValue] = useState(0); 
   const [result, setResult] = useState(0);
   const handleCalculator = () => { 
   switch (operation) {
    case "+" :
       setResult(a+b);
      break;
      case "-" :
       setResult(a-b);
      break;
      case "*" :
       setResult(a*b);
      break;
      case "/" :
       setResult(a/b);
      break;
      case "%" :
       setResult(a%b);
      break;
     }
  }
  return (
    <>
    <form action="" className='flex justify-center item-center flex flex-col gap-3' onSubmit={(e) => {
      e.preventDefault();
      Sawal.fire("Submitted ")
    }}>
      <input type='number' value={firstValue} onChange={(e) => {
        setFirstValue(Number(e.target.value))}} placeholder='Enter first no.' className='border-gray-500 rounded-md px-2'/>
        <input type='number' value={secondValue} onChange={(e) => {
        setSecondValue(Number(e.target.value))}} placeholder='Enter second no.' className='border-gray-500 rounded-md px-2'/>
      <div>
        <h1 className='text-7xl font-bold'>Simple Calulator</h1>
        </div>
        <div className='gap-5 justify-center flex '>
          <button type='submit' className='bg-green-500 rounded-md px-3' onClick={() => {
            setResult(firstValue + secondValue)
          }}>+</button>
         <button type='submit' className='bg-green-500 rounded-md px-3' onClick={() => {
            setResult(firstValue - secondValue)
          }}>-</button>
          <button type='submit' className='bg-green-500 rounded-md px-3' onClick={() => {
            setResult(firstValue * secondValue)
          }}>*</button>
          <button type='submit' className='bg-green-500 rounded-md px-3' onClick={() => {
            setResult(firstValue / secondValue)
          }}>/</button>
          <button type='submit' className='bg-green-500 rounded-md px-3' onClick={() => {
            setResult(firstValue % secondValue)
          }}>%</button>
           <div className='p-5 font-bold text-2xl italic'>
                Result <span>{result}</span>
           </div>
      

    
    
    
        </div>
        </form>
    </>
  )
}

export default Caculator
