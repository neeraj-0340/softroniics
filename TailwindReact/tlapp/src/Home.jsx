import React from 'react'

export const Home = () => {
  return (
    <div className="p-4">
    <h1 className="text-3xl font-bold">Home Page</h1>
    <p>Welcome to the home page!</p>
    <Link to="/Contact"><button type='submit'>Contact</button></Link>
    <Link to="/About"><button type='submit'>About</button></Link>
  </div>
  )
}
