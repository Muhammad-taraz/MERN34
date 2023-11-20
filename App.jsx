import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Caculator () {
   const [firstValue, setFirstValue] = useState(0);
   const [secondValue, setSecondValue] = useState(0);
   const [result, setResult] = useState(0);
   switch (value) {
    case 1 :
      firstValue + secondValue;
      break;
      case 2 :
        firstValue - secondValue;
        break;
        case 3 :
          firstValue * secondValue;
          break;
          case 4 :
            firstValue / secondValue;
            break;
            case 5 :
              firstValue % secondValue;
             
   }
  return (
    <>
    <form action='' className='flex justify-center item-center flex flex-col gap-3' onSubmit={(e) => {
      e.preventDefault
    }}>
      <input type='number' value={firstValue} onChange={(e) => {
        setFirstValue(Number(e.target.value))}} placeholder='Enter first no.' className='border-gray-500 rounded-md p-2'/>
        <input type='number' value={secondValue} onChange={(e) => {
        setSecondValue(Number(e.target.value))}} placeholder='Enter second no.' className='border-gray-500 rounded-md p-2'/>
      <div>
        <h1 className='text-7xl font-bold'>Simple Calulator</h1>
        </div>
        <div className='gap-5 justify-center flex '>
          <button type='submit' className='bg-green-500 rounded-md' onClick={() => {
            setResult(firstValue + secondValue)
          }}>+</button>
         <button type='submit' className='bg-green-500 rounded-md' onClick={() => {
            setResult(firstValue - secondValue)
          }}>+</button>
          <button type='submit' className='bg-green-500 rounded-md' onClick={() => {
            setResult(firstValue * secondValue)
          }}>+</button>
          <button type='submit' className='bg-green-500 rounded-md' onClick={() => {
            setResult(firstValue / secondValue)
          }}>+</button>
          <button type='submit' className='bg-green-500 rounded-md' onClick={() => {
            setResult(firstValue % secondValue)
          }}>+</button>
      
      

    
    
    
        </div>
        </form>
    </>
  )
}

export default Caculator
