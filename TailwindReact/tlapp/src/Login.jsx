import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
         <div className='font-sans bg-[#145cd4] min-h-screen flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center text-[#145cd4] mb-6'>Login</h2>
                
                <form>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700'>Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-semibold text-gray-700'>Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                        />
                    </div>

                    <button 
                        type="submit" 
                        className='w-full bg-[#145cd4] text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
                        Login
                    </button>
                </form>

                <div className='mt-6 text-center'>
                    <p className='text-gray-600'>Don't have an account? 
                        <Link to="/Register">
                        <a href="#" className='text-[#145cd4] font-bold ml-1 hover:underline'>Sign Up</a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
