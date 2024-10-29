import React from "react";
import { useState } from "react";

export const Keysdata = () => {
  const data = [
    { id: 1, product: "HP", price: 50000, qty: 3 },
    { id: 3, product: "Asus", price: 60000, qty: 3 },
    { id: 2, product: "Lenovo", price: 60000, qty: 3 },
  ];

  const [newdata, setNew] = useState(data);

  const handlechange = (id) => {
    const updateddata = newdata.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setNew(updateddata)
  };
  return (
    <div>
      {newdata.map((product) => (
        <div key={product.id}>
          <h1>{product.product}</h1>
          <p>{product.price}</p>
          <p>{product.qty}</p>
          <button onClick={() => handlechange(product.id)}>Add</button>
        </div>
      ))}
    </div>
  );
};
