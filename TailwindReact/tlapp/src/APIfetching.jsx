import React, { useState } from 'react'
import axios from 'axios';

export const APIfetching = () => {

    const [data,setData]=useState([]);

    const fetchdata=async()=>{
        const details=await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(details.data);
    }
    console.log(data);
    

  return (
    <div className='flex bg-blue-300 h-screen flex-col gap-6 ps-10'>
        <div>
        <button onClick={fetchdata} className='font-bold text-3xl bg-black text-white ps-3 pe-3 pt-2 pb-2 btn rounded mt-10'>click</button>
        </div>
        <div className='bg-white rounded w-fit p-4'>
        <ul>
        {data.map((user)=>(
            <div>
                <li className='font-bold text-xl'>{user.name}{user.username}</li>
            </div>
        ))}
        </ul>
        </div>
    </div>
  )
}
