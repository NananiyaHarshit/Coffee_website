import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const Coffee = () => {
  return (
    <div className="bg-text">
      <Navbar />
      <div className="flex h-auto">
        <div className="px-2 py-10 w-1/6 flex flex-col gap-10 bg-[#FED8B1]">
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
        <div className="px-3 py-2.5">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Coffee;
