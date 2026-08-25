import { createContext, useState } from "react";
import { getCoffeeDetails, getHotCoffee } from "../API/coffee_API";

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState([]);
  const fetchHotCoffee = async (l) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getHotCoffee(l);

      setHotCoffee(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const coffeeDetails = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCoffeeDetails(id);
      setDetails(data);
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
        coffeeDetails,
        details,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
