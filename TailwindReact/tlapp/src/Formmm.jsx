import React, { useState } from 'react';

export const Formmm = () => {
    const [data, setData] = useState({});

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-500">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">User Information</h2>
                
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
                    className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
