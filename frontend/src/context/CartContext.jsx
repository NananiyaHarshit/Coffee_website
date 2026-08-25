import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  // Get logged-in user's email
  const [userEmail, setUserEmail] = useState(sessionStorage.getItem("email"));

  // Load logged-in user's cart
  const loadCart = () => {
    const email = sessionStorage.getItem("email");

    const allCart = JSON.parse(localStorage.getItem("cart")) || [];

    const userCart = allCart.filter((item) => item.email === email);

    setCart(userCart);
  };

  // Load cart when user changes
  useEffect(() => {
    loadCart();
  }, [userEmail]);

  // Add to cart
  const addToCart = (details, quantity = 1) => {
    const email = sessionStorage.getItem("email");

    const allCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = allCart.find(
      (item) => item.email === email && item.details.id === details.id,
    );

    let updatedCart;

    if (existingItem) {
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

    const userCart = updatedCart.filter((item) => item.email === email);

    setCart(userCart);
  };

  // Update quantity
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

    localStorage.setItem("cart", JSON.stringify(updatedCart));

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

    localStorage.setItem("cart", JSON.stringify(updatedCart));

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
        addToCart,
        loadCart,
        updateQuantity,
        removeCartItem,
        totalCartAmount,

        // important
        userEmail,
        setUserEmail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
