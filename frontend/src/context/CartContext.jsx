import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  // Load logged-in user's cart
  const loadCart = () => {
    const email = sessionStorage.getItem("email");

    const allCart = JSON.parse(localStorage.getItem("cart")) || [];

    const userCart = allCart.filter((item) => item.email === email);

    setCart(userCart);
  };

  // Load cart when Context starts
  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = (details, quantity = 1) => {
    const email = sessionStorage.getItem("email");

    const allCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = allCart.find(
      (item) => item.email === email && item.details.id === details.id,
    );

    let updatedCart;

    if (existingItem) {
      // If coffee already exists, increase quantity
      updatedCart = allCart.map((item) => {
        if (item.email === email && item.details.id === details.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });
    } else {
      // Add new coffee
      updatedCart = [
        ...allCart,
        {
          details,
          email,
          quantity,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // IMPORTANT: update React state immediately
    const userCart = updatedCart.filter((item) => item.email === email);

    setCart(userCart);
  };

  // Increase / decrease quantity
  const updateQuantity = (productId, change) => {
    const email = sessionStorage.getItem("email");

    const allCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = allCart.map((item) => {
      if (item.email === email && item.details.id === productId) {
        return {
          ...item,
          quantity: Math.max(1, item.quantity + change),
        };
      }

      return item;
    });

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update React state
    const userCart = updatedCart.filter((item) => item.email === email);

    setCart(userCart);
  };

  // Remove item
  const removeCartItem = (productId) => {
    const email = sessionStorage.getItem("email");

    const allCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = allCart.filter(
      (item) => !(item.email === email && item.details.id === productId),
    );

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update React state
    const userCart = updatedCart.filter((item) => item.email === email);

    setCart(userCart);
  };

  // Calculate total
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + 150 * item.quantity, 0);

    setTotalCartAmount(total);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        loadCart,
        addToCart,
        updateQuantity,
        removeCartItem,
        totalCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
