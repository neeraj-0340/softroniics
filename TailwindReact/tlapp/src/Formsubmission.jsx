import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Formsubmission = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');

  const fetchMovie = async () => {
    try{
      const movies = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`);
    setMovie(movies.data.Search);
    }
    catch(error){
      console.error();
      
    }
  };
  

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Search for Movies</h1>
      
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="Enter movie name" 
        className="p-2 w-64 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movie.map((item) => (
          <div key={item.imdbID} className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">{item.Title}</h2>
            <Link to={`/moviedet/${item.imdbID}`}>
              <img src={item.Poster} alt={item.Title} className="w-full h-64 object-cover rounded-lg" />
            </Link>
          </div>
        ))}
      </div>

      <button 
        onClick={fetchMovie} 
        className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Search
      </button>
    </div>
  );
};
