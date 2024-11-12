import React, { createContext, useContext, useState } from 'react';

const StockContext = createContext();

export const useStock = () => {
  return useContext(StockContext);
};

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([]);

  const addStock = (newItem) => {
    setStock((prevStock) => {
      const existingItem = prevStock.find((item) => item.name === newItem.name);

      if (existingItem) {
        
        return prevStock.map((item) =>
          item.name === newItem.name ? { ...item, quantity: newItem.quantity } : item
        );
      }

      
      return [...prevStock, newItem];
    });
  };

  const value = {
    stock,
    addStock,
  };

  return (
    <StockContext.Provider value={value}>
      {children}
    </StockContext.Provider>
  );
};

export default StockContext;
