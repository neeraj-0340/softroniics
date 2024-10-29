import axios from "axios";
import React, { useEffect, useState } from "react";

export const Weatherapp = () => {
  const [data, setData] = useState(null);
  const [search, setsearch] = useState("");

  const fetchdata = async () => {
    try {
      const resource = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`
      );
      setData(resource.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handlechange = (e) => {
    setsearch(e.target.value);
  };

  const [color,setcolor]=useState(0);

  const colors = ['red', 'yellow', 'green', 'blue'];

  useEffect(() => {
    if (data && data.main && data.main.temp) {
      if (data.main.temp > 60) {
        setcolor(0); 
      } else if (data.main.temp > 40) {
        setcolor(2); 
      } else if (data.main.temp > 20) {
        setcolor(3); 
      }
    }
  }, [data]);
  
  

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Weather App</h1>
        <input
          type="text"
          onChange={handlechange}
          placeholder="Search for a city"
          className="w-full p-2 border rounded-md mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchdata}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
        {data && (
          <div className="mt-6 bg-blue-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold text-blue-800">{data.name}</h2>
            <p className="text-lg text-blue-600" style={{color: colors[color] }}>
              Temperature: {data.main.temp}°F
            </p>
            <p className="text-lg text-blue-600">Humidity: {data.main.humidity}%</p>
            <p className="text-blue-500 mt-2">
              Description: {data.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
