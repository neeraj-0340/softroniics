import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginApi } from '../ap/api'

export const Login = () => {

    const [login, setlogin] = useState({
        email: "",
        password: ""
    })

    const change = (event) => {
        setlogin({ ...login, [event.target.name]: event.target.value })
    }

    const handlesubmit=async(e)=>{ 
        e.preventDefault()
        try {
            const res=await loginApi(login)
            console.log(res);
            if(res?.status === 201){
                alert('login succesful...!!!')
            }else if(res?.status === 401){
                alert('incorrect credentials...!!!')
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-teal-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl text-center text-gray-900 font-semibold">Login</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={change}
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={change}

                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200"
                            onClick={handlesubmit}
                            >
                            Login
                        </button>
                    </div>
                    <div className='text-center underline'>
                        <Link to={"/register"}>
                            <p className='hover:text-purple-600'>New Here?</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
