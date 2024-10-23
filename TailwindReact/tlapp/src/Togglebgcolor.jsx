import React, { useState } from 'react'

export const Togglebgcolor = () => {
    const [count,setnum]=useState(0)
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
    


    let changecolor = () => {
        if (count === colors.length - 1) {
          setnum(0);
      } else {
          setnum(count + 1);
      }
    };

  return (
    <div className="flex justify-center items-center h-screen" style={{backgroundColor: colors[count] }}>
        <div>
            <button onClick={changecolor} className="bg-gray-600 p-6 btn rounded">colorfull akiyalloo...!!!</button>
        </div>
    </div>
  )
}
