import React from "react";
import { FiSearch } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { decrement, increment, remove } from "./Counterslice";


export const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.data);
  console.log(data);
  
  return (
    <div className="min-h-screen bg-gray-100 mt-3 ">
      <div className="bg-white shadow-lg px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Link to='/flipkart'><img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt=""
            /></Link>
          </div>

          <div className="relative w-1/3">
            <FiSearch className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex gap-8 items-center">
            <button className="text-white bg-blue-600 px-4 py-1 rounded flex gap-2 items-center">
              <CiUser />
              Login
            </button>

            <div className="cursor-pointer flex gap-2 items-center">
              <CiShoppingCart />
              Cart
            </div>
            <div className="cursor-pointer flex gap-2 items-center">
              <CiShop />
              Become a Seller
            </div>
          </div>
        </div>
        <div className="flex flex-auto w-3/12 gap-4">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>              
              <p className="text-sm text-gray-600">{product.price}</p>
              <p className="text-sm text-gray-600 mt-2">Quantity: {product.quantity}</p>

              <div className="flex flex-row gap-3 mt-1">
              <button onClick={()=>dispatch(increment(product.id))} className="btn rounded bg-blue-400 ps-2 pe-2 pb-1 font-bold">+</button>
              <button onClick={()=>dispatch(decrement(product.id))} className="btn rounded bg-blue-400 ps-2 pe-2 pb-1 font-bold">-</button>
              <button onClick={()=>dispatch(remove(product.id))} className="btn rounded bg-blue-400 ps-2 pe-2 pb-1 font-bold">remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
