import React from 'react'
import { useState } from 'react'

export const Counterapp = () => {

    const[data,setData]=useState(0)

    const intcrement=()=>{
        setData(data+1)
    }
    const decrement=()=>{
        if (data>0) {
            setData(data-1)
        }
    }
  return (
    <div>
        <h1>
            {data}
        </h1>
        <button onClick={intcrement}>add</button>
        <button onClick={decrement}>subtract</button>
    </div>
  )
}
