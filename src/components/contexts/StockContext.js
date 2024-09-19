import React, { createContext, useContext, useState } from 'react';

const StockContext = createContext();

export const useStock = () => {
  return useContext(StockContext);
};

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([]);

  const addStock = (item) => {
    setStock((prevStock) => [...prevStock, item]);
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
