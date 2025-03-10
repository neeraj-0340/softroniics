import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Page</h1>
      <p className="text-lg text-gray-600 mb-8">Get in touch with us!</p>
      <div className="flex gap-4">
        <Link to="/About">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md border border-blue-600 hover:bg-blue-600 hover:border-blue-700 transition duration-300">
            About
          </button>
        </Link>
        <Link to="/">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md border border-blue-600 hover:bg-blue-600 hover:border-blue-700 transition duration-300">
            Home
          </button>
        </Link>
      </div>
    </div>
  )
}
