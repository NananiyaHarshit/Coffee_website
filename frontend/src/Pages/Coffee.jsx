import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { getHotCoffee } from "../API/coffee_API";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { CoffeeContext } from "../context/CoffeeContext";

const Coffee = () => {
  const [searchQuery, setSearchQuery] = useState("");

  getHotCoffee();

  return (
    <div className="bg-text h-screen">
      <Navbar />
      <div className="flex justify-between  ">
        <div className="px-5 py-10 h-[86vh] w-2/9 flex flex-col gap-10 bg-[#FED8B1]">
        {/* Search */}
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="border-2 w-full border-background rounded-md px-1 py-1  focus:outline-2 outline-background/50 placeholder:font-semibold placeholder:tracking-widest"
              placeholder="Search..."
            />
          </div>
          {/* Category */}
          <div className="w-full flex flex-col flex-wrap gap-5">
            <div className="w-full  h-0.5 rounded-full bg-background/50"></div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg text-background">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSearchQuery("coffee");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Coffee
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("ice");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Ice
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("latte");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Latte
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("espresso");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Espresso
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("milk");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Milk
                </button>
              </div>
            </div>
            <div className="w-full h-0.5 rounded-full bg-background/50"></div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg text-background">Coffee Name</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSearchQuery("matcha");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Matcha
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("cappuccino");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Cappuccino
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("black tea");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Black Tea
                </button>
                <button
                  onClick={() => {
                    setSearchQuery("Hot Chocolate");
                  }}
                  className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
                >
                  Hot Chocolate
                </button>
              </div>
            </div>
            <div className="w-full h-0.5 rounded-full bg-background/50"></div>
            <button
              onClick={() => {
                setSearchQuery("");
              }}
              className="active:scale-95 transition-all bg-button text-text border-secondary px-3 py-0.5 border-2 text-xs rounded-md font-semibold"
            >
              Clear
            </button>
          </div>
        </div>
        <div className="px-10 py-2.5 w-full h-[85vh] overflow-y-scroll scroll-smooth scrollbar-thumb-background scrollbar-thin scrollbar-gutter-stable select-none">
          <Card
            limit={20}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coffee;
