import React from 'react'
import { useState } from 'react'
import { Admin } from './Admin'
import { Student } from './Student'
import { Guest } from './Guest'

export const Main1 = () => {
    
    const[role,setrole]=useState(null)
  return (
    <div className='bg-gray-500 flex flex-col'>
        <h1>Who are you ...!!!</h1>
        <button onClick={()=>setrole("admin")} className="bg-green-500 ps-2 pe-2 pt-1 pb-1 btn rounded">Admin</button>
        <button onClick={()=>setrole("student")} className="bg-green-500 ps-2 pe-2 pt-1 pb-1 btn rounded">Student</button>
        <button onClick={()=>setrole("guest")} className="bg-green-500 ps-2 pe-2 pt-1 pb-1 btn rounded">Guest</button>

        <div className='bg-blue-400'>
        {role==="admin"?(<Admin/>):
        role==="student"?(<Student/>):
        <Guest/>}
        </div>
    </div>
  )
}