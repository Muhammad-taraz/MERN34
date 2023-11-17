import React from 'react'
import { useState } from 'react'

const Circle = (props) => (
   <div 
   className='h-20 w-20 justify-center rounded-full gap-1 border-4 p-2'
   style={{backgroundColor : props?.colour || "white" }}>

   </div>
);

export default function MagicBall() {
    const [colour, setColour] = useState("white");
    const colours = ["Green", "red", "blue", "yellow", "orange"];
  return (
    <div>
       <div className='gap-5' onClick={() => {
        setColour (colours[ Math.floor(Math.random()*colours.length) ]);
       }}>
       
       <Circle colour={colour}></Circle>
        </div>
       
    <div className='flex justify-center gap-5'>{colours.map ((colourItem) => (
        <React.Fragment key={colourItem}>
            <Circle colour={colourItem}/>
        </React.Fragment>
    ) )}</div>
    </div>
  );

}
