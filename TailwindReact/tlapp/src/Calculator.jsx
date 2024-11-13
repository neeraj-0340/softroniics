import React, { useState } from 'react'

export const Calculator = () => {

    const[input,setinput]=useState('')
    const[result,setresult]=useState('')

    const handlechange=(event)=>{
         setinput(input+(event.target.value))
    }
    const clear=()=>{
         setinput('')
    }
    const calculate = () => {
        try {
          setresult(eval(input).toString());
        } catch (error) {
          setresult("Error");
        }
      };
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-64">
      <div className="mb-4 p-2 bg-white w-full text-right rounded text-xl">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2 w-full">
        <button onClick={handlechange} value="1" className="btn">1</button>
        <button onClick={handlechange} value="2" className="btn">2</button>
        <button onClick={handlechange} value="3" className="btn">3</button>
        <button onClick={handlechange} value="+" className="btn bg-blue-500 text-white">+</button>
        <button onClick={handlechange} value="4" className="btn">4</button>
        <button onClick={handlechange} value="5" className="btn">5</button>
        <button onClick={handlechange} value="6" className="btn">6</button>
        <button onClick={handlechange} value="-" className="btn bg-blue-500 text-white">-</button>
        <button onClick={handlechange} value="7" className="btn">7</button>
        <button onClick={handlechange} value="8" className="btn">8</button>
        <button onClick={handlechange} value="9" className="btn">9</button>
        <button onClick={handlechange} value="*" className="btn bg-blue-500 text-white">*</button>
        <button onClick={handlechange} value="0" className="btn">0</button>
        <button onClick={clear} className="btn bg-red-500 text-white">Clear</button>
        <button onClick={calculate} className="btn bg-green-500 text-white">=</button>
        <button onClick={handlechange} value="/" className="btn bg-blue-500 text-white">/</button>
      </div>
      <h1>{result}</h1>
    </div>
  )
}
