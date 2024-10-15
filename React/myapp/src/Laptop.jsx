import React from "react";
import img from "./lufy.jpeg";

export const Laptop = () => {
  return (
    <div>
      <div className="d-flex bg-info justify-content-center">
        <div className="pt-5 ps-5 mt-5 m-lg-5 container">
          <h1>Really catch headline here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eos ipsam rem suscipit sequi, beatae est, veritatis fugit enim qui
            animi voluptate incidunt repellendus. Possimus perspiciatis minima
            velit nemo maiores.
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-light mr-3 border-1 border-black">
              Get started
            </button>
            <button className="btn btn-light mr-3 border-1 border-black">
              Learn more
            </button>
          </div>
        </div>
        <div className="pt-5 ps-5 mt-5 m-lg-5 container">
          <img
            src={img}
            alt="laptop"
            height={200}
            width={250}
            className="rounded"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-between mt-5 mb-5 mr-5 ms-5 ">
          <div className="w-25 d-flex flex-column justify-content-center align-items-center">
            <img src={img} alt="lap" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              corporis ducimus at labore repellendus!
            </p>
          </div>
          <div className="w-25 d-flex flex-column justify-content-center align-items-center">
            <img src={img} alt="lap" width={100} height={100} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="w-25 d-flex flex-column justify-content-center align-items-center">
            <img src={img} alt="lap" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              corporis ducimusx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
