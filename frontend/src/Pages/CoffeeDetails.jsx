import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
// import { coffeeDetails } from "../API/coffee_API";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../context/CoffeeContext";

const CoffeeDetails = () => {
  const { id } = useParams();
  const {coffeeDetails,loading, error, details} = useContext(CoffeeContext)
  useEffect(() => {
    coffeeDetails(id)    
  }, []);

  if(loading){
    return(
        <div className="flex flex-col w-full h-screen">
            <Navbar />
            <div className="h-[86vh] flex justify-center items-center w-full text-6xl font-semibold text-button/50  ">
                Loading...
            </div>
        </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center h-[86vh] bg-text">
        <div className="flex w-full justify-evenly items-center bg-button p-5 rounded-xl">
          <div className="w-[40%] h-100">
            <img
              className="w-full h-full rounded-l-xl object-cover "
              src={details.image}
              alt=""
            />
          </div>
          <div className="w-[60%] h-100 bg-background rounded-r-xl flex flex-col justify-between items-start px-20 py-10">
            <div className="flex gap-4 w-full">
              <p className="text-3xl text-text font-semibold w-full">{details.title}</p>
              <p className="text-md text-text font-semibold text-right">150</p>
            </div>
            <div className="w-full h-px rounded-full bg-text"></div>
            <div className="text-text/50">
             {details.description}
            </div>
            <div className="w-full h-px rounded-full bg-text"></div>
            <div className="text-text/50">Ingredients : {details.ingredients}</div>
            <div className="w-full h-px rounded-full bg-text"></div>

            <div className="flex w-full justify-end">
              <p className="inset-ring-2 text-text font-semibold px-5 py-2 rounded-md ">
                Add to cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
