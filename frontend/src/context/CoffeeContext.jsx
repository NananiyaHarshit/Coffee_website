import { createContext, useState } from "react";
import { getCoffeeDetails, getHotCoffee } from "../API/coffee_API";

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState([]);
  const fetchHotCoffee = async (l) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getHotCoffee(l);
      setHotCoffee(data);
      setFiltered(data);
      console.log(filtered);
      
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

  const searchCoffee = (query) => {
    const filteredData = hotCoffee.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query.toLowerCase()),
        ),
    );
    setFiltered(filteredData);
  };

  return (
    <CoffeeContext.Provider
      value={{
        hotCoffee,
        loading,
        error,
        filtered,
        fetchHotCoffee,
        coffeeDetails,
        searchCoffee,
        details,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
