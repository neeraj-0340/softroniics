import React from "react";

export const Taxinvoice = () => {
  return (
    <div className="p-10">
      {/* Header */}
      <div className="bg-black w-full text-white grid grid-cols-3 items-center px-14 py-4">
        <div></div>
        <div className="text-center font-bold text-2xl">TAX INVOICE</div>
        <div className="text-right font-bold text-xl">
          <p>Invoice No. 1234</p>
          <p>Invoice Date: 04-03-2022</p>
        </div>
      </div>

      {/* Business Details */}
      <div className="text-center space-y-2 border-2 border-black py-4">
        <h1 className="text-4xl font-bold">BUSINESS NAME</h1>
        <div className="text-lg space-y-1">
          <p>132 Street City, State, PIN</p>
          <p>GSTIN: AA2134465</p>
          <p>Email: 122@gmail.com</p>
          <p>PAN NO: AAA123456</p>
        </div>
      </div>

      {/* Billing Section */}
      <div className="border-x-2 border-b-2 border-black flex">
        <div className="p-4 w-1/2">
          <h1 className="font-bold">BILL TO:</h1>
          <p>PARTY'S NAME</p>
          <p>ADDRESS</p>
          <p>132 STREET, CITY, STATE - 123456</p>
          <p>Email ID: abc@gmail.com</p>
        </div>
        <div className="w-1/2 border-l-2 border-black flex flex-col justify-center p-4">
          <p>Payment Due Date</p>
          <p>Payment Mode</p>
        </div>
      </div>

      {/* Invoice Table Header */}
      <div className="flex border-x-2 border-b-2 border-black">
        <div className="w-1/2 py-2 px-2">Description</div>
        <div className="flex w-1/2">
          <div className="w-36 px-2 flex items-center">HSN Code</div>
          <div className="w-36 border-l-2 border-black px-2 flex items-center">Qty</div>
          <div className="w-36 border-l-2 border-black px-2 flex items-center">Rate</div>
          <div className="w-36 border-l-2 border-black px-2 flex items-center">Amount</div>
        </div>
      </div>

      {/* Invoice Table Body */}
      <div className="flex h-80 border-x-2 border-b-2 border-black">
        <div className="w-1/2"></div>
        <div className="flex w-1/2">
          <div className="w-36"></div>
          <div className="w-36 border-l-2 border-black">
            <div className="h-72"></div>
            <div className="border-t-2 border-black px-2">Total</div>
          </div>
          <div className="w-36 border-l-2 border-black">
            <div className="h-72"></div>
            <div className="border-t-2 border-black px-2"></div>
          </div>
          <div className="w-56 border-l-2 border-black">
            <div className="h-72"></div>
            <div className="border-t-2 border-black px-2"></div>
          </div>
        </div>
      </div>

      {/* Terms & Total */}
      <div className="flex">
        <div className="w-1/2 border-x-2 border-b-2 border-black px-2 py-2">
          <p>Term & Conditions</p>
          <p>1.</p>
          <p>2.</p>
          <p>3.</p>
          <p>4.</p>
          <p>5.</p>
        </div>
        <div className="w-1/2 border-x-2 border-b-2 border-black px-2">
          <p className="p-1">ADD: CGST @ 14%</p>
          <p className="p-1">ADD: SGST @ 14%</p>
          <p className="p-1">Balance Received:</p>
          <p className="p-1">Balance Due:</p>
          <p className="p-1 bg-black text-white font-bold">Grand Total</p>
        </div>
      </div>

      {/* Total Amount in Words */}
      <div className="border-x-2 border-b-2 border-black py-2 underline px-2">
        Total Amount (in words):
      </div>

      {/* Authorized Signatory */}
      <div className="border-x-2 border-b-2 border-black px-2 py-4">
        <div className="pb-20">For: BUSINESS NAME</div>
        <div className="text-left">Authorised Signatory</div>
      </div>
    </div>
  );
};
