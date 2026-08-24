import { createContext, useState, useEffect } from "react";
import { getOneCoffee } from "../API/coffee_API";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [oneCoffee, setOneCoffee] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  const fetchOneCoffee = async () => {
    try {
      const data = await getOneCoffee();
      setOneCoffee(data);
    } catch (error) {
      setError(error.message);
    } finally {
    }
  };

  const setCoffeeQuantity = (c) => {
    setQuantity(c)
    console.log(quantity);
    
  }

    useEffect(() => {
    console.log("Updated quantity:", quantity);
     setTotalCartAmount(150 * quantity)
  }, [quantity]);

  const getTotalAmount = () => {
    setTotalCartAmount(150 * quantity)
  }

  return (
    <CartContext.Provider value={{ oneCoffee,fetchOneCoffee, quantity, setCoffeeQuantity,totalCartAmount ,getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
