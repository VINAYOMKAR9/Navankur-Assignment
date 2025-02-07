import React, { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = async () => {
    const response = await fetch("https://webhook.site/your-webhook-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart })
    });
    if (response.ok) alert("Purchase successful!");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

// Shopping Cart Component
const Cart = () => {
  const { cart, checkout } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.title} - ${item.price}</p>
      ))}
      <button onClick={checkout}>Buy</button>
    </div>
  );
};
export default Cart
export {CartProvider}