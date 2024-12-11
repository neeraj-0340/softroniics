import React, { useState } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export const Formdelete = () => {
    const [data, setData] = useState({});

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const { id } = useParams();

    const handleSubmit = async(event) => {
        const response=await axios.put(`http://localhost:8002/user/update/$id`)
        console.log(response);
        console.log(data);
        
        event.preventDefault();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-500">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">User Information</h2>

                {/* Name Field */}
                <label
                    htmlFor="name"
                    className="self-start w-full text-gray-700 font-medium mb-2"
                >
                    Name:
                </label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Age Field */}
                <label
                    htmlFor="age"
                    className="self-start w-full text-gray-700 font-medium mb-2"
                >
                    Age:
                </label>
                <input
                    type="number"
                    onChange={handleChange}
                    name="age"
                    placeholder="Enter your age"
                    className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Email Field */}
                <label
                    htmlFor="email"
                    className="self-start w-full text-gray-700 font-medium mb-2"
                >
                    Email:
                </label>
                <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password Field */}
                <label
                    htmlFor="password"
                    className="self-start w-full text-gray-700 font-medium mb-2"
                >
                    Password:
                </label>
                <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className='flex gap-4'>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                >
                    Update
                </button>
                
                </div>
            </form>
        </div>
    );
};
