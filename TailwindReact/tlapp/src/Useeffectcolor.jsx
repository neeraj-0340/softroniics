import React, { useEffect, useState } from 'react'

export const Togglebgcolor1 = () => {
    const [count,setnum]=useState(0)
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
    
   let changecolor=()=>{
    setnum(prevCount=>(prevCount===colors.length-1? 0: prevCount+1));
   }

   setTimeout(changecolor, 500);

  return (
    <div className="flex justify-center items-center h-screen" style={{backgroundColor: colors[count] }}>
        <div>
            <button  className="bg-gray-600 p-6 btn rounded text-white">colorfull akiyalloo...!!!</button>
        </div>
    </div>
  )
}
