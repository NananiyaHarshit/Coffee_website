import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { getHotCoffee } from "../API/coffee_API";
import { useParams } from "react-router-dom";

const Coffee = () => {
  getHotCoffee();


  return (
    <div className="bg-text h-screen">
      <Navbar />
      <div className="flex justify-between  ">
        <div className="px-5 py-10 h-[86vh] w-2/9 flex flex-col gap-10 bg-[#FED8B1]">
          <div>
            <input
              type="text"
              className="border-2 w-full border-background rounded-md px-1 py-1"
              placeholder="Search..."
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Price
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Category
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Status
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Low Price
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              High Price
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Espresso
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Matcha
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Price
            </button>
            <button className="active:scale-95 transition-all bg-button text-background border-secondary px-2 py-px border-2 text-xs rounded-md font-semibold">
              Price
            </button>
          </div>
        </div>
        <div className="px-10 py-2.5 w-full h-[86.3vh] overflow-y-scroll scroll-smooth scrollbar-thumb-background scrollbar-thin scrollbar-gutter-stable select-none">
          <Card limit={20} />
        </div>
      </div>
    </div>
  );
};

export default Coffee;
