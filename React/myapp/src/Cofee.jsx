import React from "react";
import img1 from "./lufy.jpeg";
import img2 from "./itachi.png";

export const Cofee = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="d-flex flex-column col-4 mt-5 ms-5">
          <h1 className="pt-5">Your Coffee</h1>
          <h1>Your vibe</h1>
          <h1>Your energy</h1>
          <p className="pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            laboriosam et magni natus, facilis iure, enim veritatis sit
            voluptate maiores architecto ducimus doloremque temporibus
          </p>
          <div>
            <button className="bg-warning btn rounded-5">Explore</button>
          </div>
        </div>
        <div>
          <img
            src={img1}
            alt="lufy"
            className="rounded rounded-circle position-absolute right-50 bottom-50"
            width={200}
            height={200}
          />
          <img
            src={img2}
            alt="sharingan"
            className="rounded rounded-circle position-absolute  bottom-50   start-50 end-50"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};
