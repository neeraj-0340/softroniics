import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Home Page</h1>
      <p className="text-lg text-gray-600 mb-8">Welcome to the home page!</p>
      <div className="flex gap-4">
        <Link to="/Contact">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md border border-blue-600 hover:bg-blue-600 hover:border-blue-700 transition duration-300">
            Contact
          </button>
        </Link>
        <Link to="/About">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md border border-blue-600 hover:bg-blue-600 hover:border-blue-700 transition duration-300">
            About
          </button>
        </Link>
      </div>
    </div>
  )
}
