import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Minus, Plus } from "lucide-react";
import { CoffeeContext } from "../context/CoffeeContext";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const [count, setCount] = useState(1);
  const {
    oneCoffee,
    loading,
    error,
    fetchOneCoffee,
    setCoffeeQuantity,
    quantity,
    totalCartAmount,
    getTotalAmount,
  } = useContext(CartContext);
  useEffect(() => {
    fetchOneCoffee();
  }, []);

  useEffect(() => {
    console.log("count", count);
    getTotalAmount();
    setCoffeeQuantity(count);
    console.log("count2", count);
  }, [count]);
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="w-full h-[86vh] flex justify-center items-center text-6xl font-semibold">
          Loading...
        </div>
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="bg-text w-full h-screen">
      <Navbar />
      <div className="w-full h-[86vh] flex justify-evenly items-center px-20">
        <div className="bg-button/30 inset-ring-4 inset-ring-background/30 w-[60%] rounded-md flex gap-5 px-2">
          <div className="flex gap-5">
            <div className="w-[30%] h-37.5 object-cover p-2">
              <img
                className="w-full h-full rounded-md"
                src={oneCoffee.image}
                alt=""
              />
            </div>
            <div className="flex-col flex justify-between items-start py-5">
              <div className="text-lg font-semibold">
                <p>{oneCoffee.title}</p>
                <p className="text-xs text-background/60 w-4/5">
                  {oneCoffee.description}
                </p>
              </div>
              <div className="text-lg font-bold">₹ 150</div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center py-5">
            <button
              className="w-8 h-8 bg-background text-center rounded-md flex items-center justify-center text-text"
              onClick={() => {
                if (count >= 1) setCount(count + 1);
              }}
            >
              <Plus />
            </button>
            <p className="w-8 h-8 text-center align-middle rounded-md flex items-center justify-center">
              {quantity}
            </p>
            <button
              className="w-8 h-8 bg-background text-center rounded-md flex items-center justify-center text-text"
              onClick={() => {
                if (count > 1) setCount(count - 1);
              }}
            >
              <Minus />
            </button>
          </div>
        </div>
        <div className="bg-button/30 w-[30%] h-[60vh] rounded-lg p-5 flex flex-col justify-center items-center gap-5 inset-ring-4 inset-ring-background/30 ">
          <div className="w-full flex flex-col justify-between py-5 items-center rounded-md">
            <div className="w-full h-[18vw] flex flex-col gap-2 p-2">
              <p className="text-2xl font-semibold">Order Summary </p>
              <div className="w-full flex flex-col justify-between items-center p-2">
                <div className="w-full flex justify-between items-center">
                  <p>Sub Total</p>
                  <p className="font-semibold">{totalCartAmount}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>Delivery Fee</p>
                  <p className="font-semibold">50</p>
                </div>
              </div>
              <div className="w-full h-0.5 bg-background rounded-full"></div>
              <div className="flex justify-between items-center p-2">
                <p>Total Pay</p>
                <p className="font-semibold">{totalCartAmount + 50}</p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="w-1/2 py-2 bg-background text-text font-semibold rounded-md">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
