import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


export const Moviedetails = () => {

    const{imdbID}=useParams()
    const[movie,setmovie]=useState(null)

    useEffect(()=>{
      const fetchmovie=async()=>{
        try{
          const response= await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=a5ef1268`)
          setmovie(response.data)    
        }
        catch(error){
          console.error("error fetching",error);
        }
      };
      fetchmovie();
    },[imdbID]);
   
    if(!movie){
      return <h1>loading....</h1>
    }

    console.log(movie);
    console.log(imdbID); 
    
  return (
      <div className="max-w-sm mx-auto bg-white rounded shadow-lg overflow-hidden pt-8 ">
      <img className="w-full h-80 object-cover" src={movie.Poster} alt={movie.Title} />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{movie.Title}</h2>
        <p className="text-gray-600">Year: {movie.Year}</p>
        <p className="text-gray-600">Type: {movie.Type}</p>
      </div>
    </div>
  )
}
