import { createContext, useState } from "react";
import { getHotCoffee} from "../API/coffee_API";

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHotCoffee = async (l) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getHotCoffee(l);

      setHotCoffee(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CoffeeContext.Provider
      value={{
        hotCoffee,
        loading,
        error,
        fetchHotCoffee,
       }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};