import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { FaceSlightlyFrowning, Minus, Plus } from "lucide-react";
import { CartContext } from "../context/CartContext";
import Footer from "../Components/Footer";

const Cart = () => {
  const { cart, updateQuantity, removeCartItem, totalCartAmount } =
    useContext(CartContext);

  return (
    <div className="bg-text w-full min-h-screen">
      <Navbar />

      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-8 items-start py-6 px-4 sm:px-8 lg:px-20">
        {/* Items Start */}
        <div
          className={`${
            cart.length === 0 ? "hidden" : ""
          } flex w-full lg:w-[70%] flex-col gap-3 justify-center items-center`}
        >
          {cart.map((item) => {
            return (
              <div
                key={item.details.id}
                className="bg-button/30 shadow-md shadow-background/70 rounded-md flex w-full gap-2 sm:gap-5 px-2"
              >
                {/* Product Details */}
                <div className="flex gap-2 sm:gap-5 w-full min-w-0 items-center">
                  {/* Image */}
                  <div className="w-28 h-28 sm:w-40 sm:h-32 lg:w-60 lg:h-37.5 shrink-0 p-2">
                    <img
                      className="w-full h-full object-cover object-center rounded-md"
                      src={item.details.image}
                      alt={item.details.title}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between items-start py-3 sm:py-5 min-w-0 flex-1">
                    <div className="text-base sm:text-lg font-semibold w-full">
                      <p className="truncate">{item.details.title}</p>

                      <p className="text-xs text-background/60 w-full sm:w-4/5 line-clamp-2">
                        {item.details.description}
                      </p>
                    </div>

                    <div className="text-base sm:text-lg font-bold mt-2">
                      ₹ 150
                    </div>

                    {/* Remove Button */}
                    <div className="w-full flex justify-start sm:justify-end items-center mt-2">
                      <button
                        onClick={() => removeCartItem(item.details.id)}
                        className="bg-red-700 shadow-md active:scale-95 shadow-red-800 text-text px-4 sm:px-8 py-1 rounded-md text-xs sm:text-sm whitespace-nowrap font-semibold"
                      >
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex flex-col justify-between items-center py-3 sm:py-5 shrink-0">
                  {/* Plus */}
                  <button
                    className="w-7 h-7 sm:w-8 sm:h-8  shadow-sm shadow-button active:scale-95 bg-background text-center rounded-md flex items-center justify-center text-text"
                    onClick={() => updateQuantity(item.details.id, 1)}
                  >
                    <Plus size={16} />
                  </button>

                  {/* Quantity */}
                  <p className="w-7 h-7 sm:w-8 sm:h-8 text-center rounded-md flex items-center justify-center">
                    {item.quantity}
                  </p>

                  {/* Minus */}
                  <button
                    className="w-7 h-7 sm:w-8 sm:h-8  shadow-sm shadow-button active:scale-95 bg-background text-center rounded-md flex items-center justify-center text-text"
                    onClick={() => updateQuantity(item.details.id, -1)}
                  >
                    <Minus size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Cart */}
        <div
          className={`${
            cart.length === 0 ? "" : "hidden"
          } flex w-full lg:w-[70%] flex-col gap-3 justify-center items-center bg-button/50 h-85 rounded-lg`}
        >
          <div className="text-3xl font-semibold text-background flex flex-col justify-center items-center">
            <FaceSlightlyFrowning size={50} />

            <p>Cart is Empty</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-button/30 w-full lg:w-[30%] min-h-87.5 lg:h-[60vh] rounded-lg p-4 sm:p-5 flex flex-col justify-center items-center gap-5 shadow-md shadow-background/70">
          <div className="w-full flex flex-col justify-between py-5 items-center rounded-md">
            <div className="w-full flex flex-col gap-4 p-2">
              <p className="text-xl sm:text-3xl font-semibold  text-shadow-lg">Order Summary</p>

              <div className="w-full flex flex-col justify-between items-center p-2 gap-3">
                <div className="w-full flex justify-between items-center">
                  <p>Sub Total</p>

                  <p className="font-semibold">₹ {totalCartAmount}</p>
                </div>

                <div className="w-full flex justify-between items-center">
                  <p>Delivery Fee</p>

                  <p className="font-semibold">₹ 50</p>
                </div>
              </div>

              <div className="w-full h-0.5 bg-background rounded-full"></div>

              <div className="flex justify-between items-center p-2">
                <p>Total Pay</p>

                <p className="font-semibold">₹ {totalCartAmount + 50}</p>
              </div>
            </div>

            {/* Checkout */}
            <div className="w-full flex justify-center items-center mt-3">
              <button className="w-full sm:w-1/2 py-2 shadow-md shadow-button bg-background text-text font-semibold rounded-md">
                Checkout Now
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary End */}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
