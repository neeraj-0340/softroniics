import React from "react";

export const Taxinvoice = () => {
  return (
    <div className="p-10 ">
      <div className="bg-black w-full text-white md:grid grid-cols-3 sm:flex flex-row gap-6 items-center px-14 py-4">
        <div></div>
        <div className="text-center font-bold text-2xl">TAX INVOICE</div>
        <div className="text-right font-bold text-xl md:text-right sm:text-center">
          <p>Invoice No. 1234</p>
          <p>Invoice Date: 04-03-2022</p>
        </div>
      </div>

      <div className="text-center space-y-2 border-2 border-black pb-4 pt-2">
        <h1 className="text-4xl font-bold">BUSINESS NAME</h1>
        <div className="text-lg space-y-1">
          <p>132 Street City, State, PIN</p>
          <p>GSTIN: AA2134465</p>
          <p>Email: 122@gmail.com</p>
          <p>PAN NO: AAA123456</p>
        </div>
      </div>

      <div className="border-s-2 border-b-2 border-e-2 border-black flex">
        <div className="p-4 w-1/2">
          <h1 className="font-bold">BILL TO:</h1>
          <p>PARTY'S NAME</p>
          <p>ADDRESS</p>
          <p>132 STREET,CITY,STATE - 123456</p>
          <p>Email ID: abc@gmail.com</p>
        </div>
        <div className="w-1/2 border-l-2 border-black flex flex-col justify-center p-4">
          <p>Payment Due Date</p>
          <p>Payment Mode</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 pt-2 pb-2 border-s-2 border-b-2 border-black ps-2">
          Description
        </div>
        <div className="flex border-s-2 border-black border-b-2 border-e-2 w-1/2">
          <div className="w-36 ps-2 flex items-center">HSN Code</div>
          <div className="w-36 border-s-2 border-black ps-2 flex items-center">
            Qty
          </div>
          <div className="w-36 border-s-2 border-black ps-2 flex items-center">
            Rate
          </div>
          <div className="w-36 border-s-2 border-black ps-2 flex items-center">
            Amount
          </div>
        </div>
      </div>

      <div className="flex h-80">
        <div className="w-1/2 pt-2 pb-2 border-s-2 border-b-2 border-black"></div>
        <div className="flex border-s-2 border-black border-b-2 border-e-2 w-1/2">
          <div className="w-36 ps-2"></div>
          <div className="w-36 border-s-2 border-black">
            <div className="h-72"></div>
            <div className="border-t-2 border-black ps">total</div>
          </div>
          <div className="w-36 border-s-2 border-black">
            <div className="h-72"></div>
            <div className="border-t-2 border-black ps"></div>
          </div>
          <div className="w-56 border-s-2 border-black">
            <div className="h-72"></div>
            <div className="border-t-2 border-black ps"></div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 pt-2 pb-2 border-s-2 border-b-2 border-black ps-2">
          <p>Term & Conditions</p>
          <p>1.</p>
          <p>2.</p>
          <p>3.</p>
          <p>4.</p>
          <p>5.</p>
        </div>
        <div className=" border-s-2 border-black border-b-2 border-e-2 w-1/2">
          <p className="p-1">ADD :CGST @ 14%</p>
          <p className="p-1">ADD:SCST @ 14%</p>
          <p className="p-1">Balance Received :</p>
          <p className="p-1">Balance Due ;</p>
          <p className="p-1 bg-black text-white">Grand Total</p>
        </div>
      </div>

      <div className="border-s-2 border-black border-b-2 border-e-2 pt-2 pb-2 underline">
        Total Amount (in word) :
      </div>

      <div className="border-s-2 border-black border-b-2 border-e-2 h-36">
        <div className="h-1/2 pt-2 ps-2">For : Business Name</div>
        <div className="h-1/2 flex justify-start items-end items- ps-2">
          Authorised signatory
        </div>
      </div>
    </div>
  );
};
