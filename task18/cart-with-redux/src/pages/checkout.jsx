import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Checkout() {
  const globalState = useSelector((state) => state);
  return (
    <div className="flex justify-center gap-11">
      <hr />
   
      <div className="w-[45rem] flex flex-col italic">
        <h2 className="text-xl font-bold italic">Total Price : 87 </h2>
        <div className="flex justify-between py-5 px-5 border-b italic">
          <span className="w-[35%] italic">Name</span>
          <span>qty</span>
          <span>unit Price</span>
          <span>net Price</span>
        </div>
        {Object.keys(globalState.cart).map((item, index) => {
          return (
            <div
              className=" border-b border-gray-200 py-2 flex justify-between px-2"
              key={index}
            >
              <span className="w-[35%]">{globalState?.cart[item]?.name}</span>
              <span>
                {globalState?.cart[item]?.qty}
              </span>
              <span>
                {globalState?.cart[item]?.price}
              </span>
              <span>
                {globalState?.cart[item]?.qty * globalState?.cart[item]?.price}
              </span>
            </div>
          );
        })}
      </div>
      <form className="w-[45%] flex flex-col gap-5 rounded-md bg-gray-100 p-5 italic">
        <h4>Pay with cart </h4>
        
        <input
          type="text"
          className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5 italic"
          placeholder="Email..."
        />
        <div className="flex gap-2 w-100">
          <input
            type="date"
            className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5 italic"
          />
          <input
            type="text"
            className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5 italic"
            placeholder="CSV"
            min={5}
            max={5}
          />
        </div>
        <input
          type="text"
          className=" w-100 h-100 border-2 border-blue-400 rounded-md px-5 italic"
          placeholder="full name on card..."
        />
        <select
          name=""
          id=""
          className="px-5 py-3  border-2 border-blue-400 rounded-lg italic"
        >
          <option value="">Pakistan</option>
          <option value="">Pakistan</option>
          <option value="">Pakistan</option>
          <option value="">Pakistan</option>
        </select>
        <button className="bg-blue-500 rounded-md text-gray-100 w-fit px-5 py-3 italic">
          payment{" "}
        </button>
      </form>
    </div>
  );
}
