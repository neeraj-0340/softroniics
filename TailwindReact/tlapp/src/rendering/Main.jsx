import React from 'react'
import { Notlogged } from './Notlogged';
import { Logged } from './Logged';
import { useState } from 'react';

export const Main = () => {

    const[login,setlogin]=useState(null)

    const managechanget=()=>{
        setlogin(true)
    }
    const managechangef=()=>{
        setlogin(false)
    }
  return (
    <div className='bg-gray-500 flex flex-col'>
        <div className='flex gap-6 ps-10 pt-10 pb-10'>
        <button onClick={managechanget} className="bg-green-500 ps-2 pe-2 pt-1 pb-1 btn rounded">true</button>
        <button onClick={managechangef} className="bg-green-500 ps-2 pe-2 pt-1 pb-1 btn rounded">false</button>
        </div>
        <div className='bg-blue-400'>
        {login?<Logged></Logged>:<Notlogged></Notlogged> }
        </div>
    </div>
  )
}
