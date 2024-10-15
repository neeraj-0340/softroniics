import React from 'react'
import img from "./lufy.jpeg";


export const New = () => {
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div class="shrink-0">
      <img src={img} alt="" class="size-12 hover:translate-y-12 hover:rotate-90" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
  )
}
