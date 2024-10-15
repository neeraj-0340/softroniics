import React, { useState } from "react";

export const Count = () => {
  const [Count, setCount] = useState(0);
  let increment = () => {
    setCount(Count + 1);
  };
  let decrement = () => {
    if (Count != 0) setCount(Count - 1);
  };

  const [Datas, setDatas] = useState([]);

  let Add = () => {
    setDatas([{ name: "Appusss" }, { name: "ponnusss" }]);
  };
  console.log(Datas);

  return (
    <div>
      <div class="flex flex-col p-10 gap-10 justify-center items-center bg-red-400">
        <div class="bg-white p-10 rounded flex flex-col justify-center items-center gap-3">
        <h1>Counter</h1>
        <h1>{Count}</h1>
        <div className="flex gap-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md border border-blue-600 hover:bg-blue-600 hover:border-blue-700 transition duration-300"
          >
            increase
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md border border-blue-600 hover:bg-blue-600 hover:border-blue-700 transition duration-300"
          >
            decrease
          </button>
        </div>
        </div>
      </div>
      <div class="bg-blue-300 h-96 flex justify-center items-center flex-col gap-4">
     <div class="bg-white p-10 rounded flex flex-col justify-center items-center gap-3">
     <button
          onClick={Add}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md border border-blue-600 hover:bg-blue-600 hover:border-blue-700 transition duration-300"
        >
          Add names
        </button>
        {Datas.map((item) => (
          <h2 class="font-bold">{item.name}</h2>
        ))}
     </div>
      </div>
    </div>
  );
};
