"use client";
import { useRef } from "react";
import close from "../../public/close.svg";
import Image from "next/image";

export default function Products() {
  let handleAddClick = () => {
    let addCard = document.getElementById("addCard");
    addCard!.style.display = "block";
  };

  let handleCloseClick = () => {
    let addCard = document.getElementById("addCard");
    addCard!.style.display = "none";
  };

  return (
    <div className="m-4 relative">
      <div className="flex flex-row p-2 w-full">
        <div className="flex flex-row basis-5/6">
          <label className="me-3 p-1 ">Product name</label>
          <input
            type="text"
            className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
          w-80 text-sm"
            placeholder="Search product ..."
          />
        </div>
        <button
          className="bg-blue-500 p-1 w-16 rounded-md text-white font-bold md:ms-28 hover:bg-blue-900"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
      <div className="justify-center h-[100vh] grid md:mt-20 absolute">
        <div
          className="flex flex-col shadow-sm shadow-black md:h-80 text-sm relative md:left-[100%]"
          id="addCard"
          style={{ display: "none" }}
        >
          <div className="flex justify-end">
            <Image
              src={close}
              alt="close"
              className="p-1 me-3 bg-slate-200 m-1 hover:cursor-pointer hover:bg-slate-400"
              onClick={handleCloseClick}
            />
          </div>
          <div className="flex flex-row p-2  ">
            <label className="me-2 p-1 basis-1/3">Product name</label>
            <input
              type="text"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Enter product name"
            />
          </div>
          <div className="flex flex-row p-2">
            <label className="me-2 p-1 basis-1/3">Amount</label>
            <input
              type="number"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Enter amount"
            />
            </div>
          <div className="flex flex-row p-2">
            <label className="me-2 p-1 basis-1/3">Unit cost</label>
            <input
              type="number"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Enter cost"
            />
          </div>
          <div className="flex flex-row p-2 ">
            <label className="me-2 p-1 basis-1/3">Total cost</label>
            <input
              type="number"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              // placeholder="Enter unit price"
            disabled/>
          </div>
          <div className="flex flex-row p-2 ">
            <label className="me-2 p-1 basis-1/3">Price</label>
            <input
              type="number"
              className="p-1 focus:outline focus:outline-none focus:ring focus:ring-slate-100 border border-slate-300 rounded-md
           text-sm"
              placeholder="Enter price"
            />
          </div>
          <button
            className="bg-blue-600 p-1 m-3 text-white font-bold mt-4 hover:bg-blue-900 w-72"
            // onClick={handleAddClick}
          >
            Add Product
          </button>
        </div>
      </div>
      <p>hello</p>
    </div>
  );
}
