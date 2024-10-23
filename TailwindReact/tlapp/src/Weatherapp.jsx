import axios from 'axios'; // Use lowercase 'axios'
import React, { useEffect, useState } from 'react';

export const Weatherapp = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const resource = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`
      );
      setData(resource.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>
        Weather in {data?.name}, {data?.sys?.country}
      </h1>
      <ul>
        <li>Temperature: {data?.main?.temp}°F</li>
        <li>Feels Like: {data?.main?.feels_like}°F</li>
        <li>Min Temperature: {data?.main?.temp_min}°F</li>
        <li>Max Temperature: {data?.main?.temp_max}°F</li>
        <li>Humidity: {data?.main?.humidity}%</li>
        <li>Wind Speed: {data?.wind?.speed} mph</li>
        <li>Wind Direction: {data?.wind?.deg}°</li>
      </ul>

      <h2>Weather Details</h2>
      {data?.weather?.map((weather) => (
        <li key={weather.id}>
          Condition: {weather.main} ({weather.description})
        </li>
      ))}
    </div>
  );
};
