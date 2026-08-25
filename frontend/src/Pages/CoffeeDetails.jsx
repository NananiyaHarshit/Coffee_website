import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
// import { coffeeDetails } from "../API/coffee_API";
import { useNavigate, useParams } from "react-router-dom";
import { CoffeeContext } from "../context/CoffeeContext";
import Footer from "../Components/Footer";
import { ShoppingBasket } from "lucide-react";
import { CartContext } from "../context/CartContext";

const CoffeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { coffeeDetails, loading, error, details } = useContext(CoffeeContext);
  // const { quantity } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    coffeeDetails(id);
  }, []);

  const handleAddToCart = () => {
    addToCart(details);
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="flex flex-col w-full h-screen">
        <Navbar />
        <div className="h-[86vh] flex justify-center items-center w-full text-6xl font-semibold text-button/50  ">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center h-[86vh] bg-text">
        <div className="flex w-full justify-evenly items-center bg-background p-5 rounded-xl shadow-md shadow-background">
          <div className="w-[40%] h-100">
            <img
              className="w-full h-full rounded-l-xl object-cover "
              src={details.image}
              alt=""
            />
          </div>
          <div className="w-[60%] h-100 bg-button text-background rounded-r-xl flex flex-col justify-between items-start px-20 py-10">
            <div className="flex gap-4 w-full">
              <p className="text-3xl  font-semibold w-full">{details.title}</p>
              <p className="text-md  font-semibold text-right">150</p>
            </div>
            <div className="w-full h-px rounded-full bg-background"></div>
            <div className="">{details.description}</div>
            <div className="w-full h-px rounded-full bg-background"></div>
            <div className="">
              Ingredients : {details.ingredients?.join(", ")}
            </div>
            <div className="w-full h-px rounded-full bg-background"></div>

            <div className="flex w-full justify-end">
              <p
                onClick={() => {
                  handleAddToCart();
                }}
                className="inset-ring-2 cursor-pointer bg-background text-text flex gap-2 font-semibold px-5 py-2 rounded-md "
              >
                Add to cart
                <ShoppingBasket />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoffeeDetails;
