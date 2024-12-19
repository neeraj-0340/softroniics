import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";



export const Profile = () => {
    const navigate = useNavigate();
    const[userdata,setUserdata]=useState(null);
    const id=localStorage.getItem("id");
    
    useEffect(()=>{
        if (!id) {
            navigate("/login1");
            return;
        }
        
        const fetchdata = async()=>{
            try{
                const response=await axios.get(`http://localhost:8002/user/logindetails/${id}`);
                setUserdata(response.data);
            } catch(error){
                console.error("error fetching data ...!!!",error);
            }
        };
        fetchdata();
    },[id]);
    
    const logout = () => {
        localStorage.clear();
        navigate("/login1");
    };
    
    if (!userdata) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
              <p>Loading user details...</p>
            </div>
          );
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-white py-8 px-28 rounded-lg shadow-lg">
        <div className="text-2xl font-medium text-center">
          <p>Name: {userdata.name || "N/A"}</p>
          <p>Age: {userdata.age || "N/A"}</p>
          <p>Email: {userdata.email || "N/A"}</p>
        </div>
        <button
          onClick={logout}
          className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
