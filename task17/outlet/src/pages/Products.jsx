import React from "react";
import ProductData from '../Products/ProductData.json'
export default function Products() {
  //console.log("ProductData")
     
  return <div className="flex font-semibold flex-col italic ml-12">

         

          {ProductData.map((Products, i)  => {

            return ( <>
            <div key={i} className="grid mt-5 ">

               <img className="w-[25vh] flex "
               src={`https://api.dicebear.com/7.x/icons/svg?seed=Molly = ${Products.name}`}
               alt="avatar" />
            <div>{Products.name}</div>
            <div>{Products.category}</div>
            <div>{Products.availability}</div>
            <div>{Products.price}</div>
            <div>{Products.description}</div>
              </div>
                  </> 
          
                  )
          }
          
          
          
          )
          
          
          
          }


         </div>
  
  
}
