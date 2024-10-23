import React, { useState } from 'react'

export const Datafetching = () => {

    const[data,setData]=useState([]);

    const users=[
        {name:'user 1'},
        {name:'user 2'},
    ]

    setTimeout(() => {
        setData(users);
    }, 3000);

  return (
    <div className='flex justify-center items-center bg-blue-300 h-screen flex-col'>
      <h2 className='font-bold text-3xl'>user list</h2>
        {data.map((user)=>(
          <h2 className='font-bold text-xl'>{user.name}</h2>
        ))}
    </div>
  )
}
