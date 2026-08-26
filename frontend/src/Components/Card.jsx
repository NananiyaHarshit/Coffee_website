import React, { useContext, useEffect } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Card = ({ limit, searchQuery, setSearchQuery }) => {
  const { hotCoffee, searchCoffee, filtered, loading, error, fetchHotCoffee } =
    useContext(CoffeeContext);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    fetchHotCoffee(limit);
  }, []);

  useEffect(() => {
    searchCoffee(searchQuery);
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="w-full text-6xl h-[86vh] font-semibold text-button/50 flex justify-center items-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  const list = [1, 2, 3];

  return (
    <div className="grid grid-cols-3 gap-5 h-auto flex-wrap justify-center items-center py-10 ">
      {filtered.map((elem, idx) => {
        return (
          <Link to={`/coffeeDetails/${elem.id}`} key={idx}>
            <div className="p-3 rounded-lg bg-background shadow-md hover:scale-101 shadow-button hover:shadow-lg flex text-text flex-col gap-2 ">
              <div className="w-full h-60 ">
                <img
                  className="w-full shrink-0 h-full object-center object-cover hover:invert-0  transition-all  "
                  src={elem.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className=" text-2xl font-bold w-full text-center text-shadow-sm text-shadow-button/50">{elem.title}</p>
              </div>
              {/* <div className="flex justify-between items-center px-2">
                <p className="font-bold text-lg">₹ 150</p>
                <button
                  onClick={() => {
                    handleAddToCart();
                  }}
                  className="bg-button px-8 py-1 rounded-md font-semibold"
                >
                  add to card
                </button>
              </div> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
