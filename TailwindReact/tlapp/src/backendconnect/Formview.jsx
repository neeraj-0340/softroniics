import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Formview = () => {
  const [books, setbooks] = useState([]);
  const fetchbooks = async () => {
    try {
      const response = await axios.get("http://localhost:8002/user/view");
      setbooks(response.data);
    } catch (error) {
      console.error("error fetching books:", error);
    }
  };
  useEffect(() => {
    
    fetchbooks();
  }, []);

  const deleteform = (id) => {
    const response = axios.delete(`http://localhost:8002/user/delete/${id}`);
    console.log(response);
    fetchbooks();
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
        {books.map((item) => (
          <div
            key={item.id}
            className="p-4 shadow-md hover:scale-105 transition-all duration-300 rounded-xl"
          >
            <div className="flex justify-center items-center mb-3"></div>
            <h1 className="mb-2 font-bold">Name : {item.name}</h1>
            <h1 className="mb-2 font-bold">Age : {item.age}</h1>
            <h1 className="mb-2 font-bold">Email : {item.email}</h1>
            <h1 className="mb-2 font-bold">Password : {item.password}</h1>
            <div className="flex gap-4">
              <button
                type="submit"
                onClick={() => deleteform(item._id)}
                className="w-full bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              >
                Delete
              </button>
              <Link to={`/Formdelete/${item._id}`}>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              >
                Edit
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
