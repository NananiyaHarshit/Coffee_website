import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CoffeeProvider } from "./context/CoffeeContext.jsx";
import {  CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CoffeeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoffeeProvider>
  </BrowserRouter>,
);
