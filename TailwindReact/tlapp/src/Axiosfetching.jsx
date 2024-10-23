import axios from 'axios';
import React, { useState } from 'react'

export const Axiosfetching = () => {

    const [todo,setTodo]=useState([]);

    const fetchtodo=async()=>{
        const resource=await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodo(resource.data);
    }


    const [todo1,setTodo1]=useState([]);

    const fetchtodo1=async()=>{
        const resource=await axios.get('https://jsonplaceholder.typicode.com/todos');
        const completedtask=resource.data.filter((item)=>item.completed===true);
        setTodo1(completedtask);
    }

    const [todo2,setTodo2]=useState([]);

    const fetchtodo2=async()=>{
        const resource=await axios.get('https://jsonplaceholder.typicode.com/todos');
        const notcompletedtask=resource.data.filter((item)=>item.completed===false);
        setTodo2(notcompletedtask);
    }


    console.log(todo);
    

  return (
    <div className='flex  p-10'>
        <div className='w-4/12'>
        <div className='mb-6'>
            <button onClick={fetchtodo} className='font-bold text-3xl bg-slate-800 text-white ps-3 pe-3 pt-2 pb-2 btn rounded'>Todo list</button>
        </div>
        <ol>
        {todo.map((item)=>(
            <li key={item.id} className='pb-3'>
            <div className='flex gap-2'><h2 className='font-bold'>userid:</h2>{item.userId}</div>
            <div className='flex gap-2'><h2 className='font-bold'>id:</h2>{item.id}</div>
            <div className='flex gap-2'><h2 className='font-bold'>title:</h2>{item.title}</div>
            <div className='flex gap-2'><h2 className='font-bold'>completed:</h2><p className='text-blue-600 font-bold'>{item.completed.toString()}</p></div></li>
        ))}
    </ol>
        </div>
        <div className='w-4/12'>
        <div className='mb-6'>
            <button onClick={fetchtodo1} className='font-bold text-3xl bg-slate-800 text-white ps-3 pe-3 pt-2 pb-2 btn rounded'>completed tasks</button>
        </div>
        <ol>
        {todo1.map((item)=>(
            <li key={item.id} className='pb-3'>
            <div className='flex gap-2'><h2 className='font-bold'>userid:</h2>{item.userId}</div>
            <div className='flex gap-2'><h2 className='font-bold'>id:</h2>{item.id}</div>
            <div className='flex gap-2'><h2 className='font-bold'>title:</h2>{item.title}</div>
            <div className='flex gap-2'><h2 className='font-bold'>completed:</h2><p className='text-green-600 font-bold'>{item.completed.toString()}</p></div></li>
        ))}
    </ol>
        </div>
        <div className='w-4/12'>
        <div className='mb-6'>
            <button onClick={fetchtodo2} className='font-bold text-3xl bg-slate-800 text-white ps-3 pe-3 pt-2 pb-2 btn rounded'>unfinished tasks</button>
        </div>
        <ol>
        {todo2.map((item)=>(
            <li key={item.id} className='pb-3'>
            <div className='flex gap-2'><h2 className='font-bold'>userid:</h2>{item.userId}</div>
            <div className='flex gap-2'><h2 className='font-bold'>id:</h2>{item.id}</div>
            <div className='flex gap-2'><h2 className='font-bold'>title:</h2>{item.title}</div>
            <div className='flex gap-2'><h2 className='font-bold'>completed:</h2><p className='text-red-600 font-bol'>{item.completed.toString()}</p></div></li>
        ))}
    </ol>
        </div>
    </div>
  )
}
