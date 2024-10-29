import React from "react";
import { useState } from "react";

export const Tasktoggle = () => {
  const task = [
    { id: 1, title: "Elicitation", status: "unfinished" },
    { id: 2, title: "Documenting", status: "unfinished" },
    { id: 3, title: "Designing", status: "unfinished" },
    { id: 4, title: "Defining", status: "unfinished" },
  ];

  const [newtask, setNewtask] = useState(task);

  const finished = (id) => {
    const updatedtask = newtask.map((item) =>
      item.id === id ? { ...item, status: (item.status = "finished") } : item
    );
    setNewtask(updatedtask);
  };
  const unfinished = (id) => {
    const updatedtask = newtask.map((item) =>
      item.id === id ? { ...item, status: (item.status = "unfinished") } : item
    );
    setNewtask(updatedtask);
  };
  return (
    <div className="flex ms-14 mt-10 bg-blue-300 w-fit p-6 gap-20 rounded">
      {newtask.map((item) => (
        <div key={item.id} className="bg-white rounded p-6 flex flex-col gap-2">
            <h1 className="font-medium">Task id : {item.id}</h1>
          <h1 className="font-medium">Task name : {item.title}</h1>
          <p className="font-medium flex gap-2">Status :{" "} <span className={`${item.status="unfinished"? "text-red-600" : "text-green-500"}`}>{item.status}</span></p>
          <div className="flex gap-6">
            <button onClick={() => finished(item.id)} className="bg-green-500 ps-2 pe-2 pt-1 pb-1 btn rounded">done</button>
            <button onClick={() => unfinished(item.id)} className="bg-red-600 ps-2 pe-2 pt-1 pb-1 btn rounded">not done</button>
          </div>
        </div>
      ))}
    </div>
  );
};
