import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Ensure product has an id and quantity
      const productToAdd = {
        ...product,
        id: product.id || product.itemId,
        quantity: product.quantity || 1
      };
      
      const existingProduct = prevCart.find(item => (item.id === productToAdd.id || item.itemId === productToAdd.id));
      
      if (existingProduct) {
        // Update the quantity if the product already exists
        return prevCart.map(item =>
          (item.id === productToAdd.id || item.itemId === productToAdd.id)
            ? { ...item, quantity: item.quantity + productToAdd.quantity }
            : item
        );
      } else {
        // Add the new product
        return [...prevCart, productToAdd];
      }
    });
    
    // Show a confirmation message
    alert(`${product.itemName} added to cart!`);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
