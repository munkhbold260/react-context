import React, { useContext, createContext, useState } from "react";

const NumberContext = createContext();
export const UseNumber = () => {
  return useContext(NumberContext);
};

export function NumberProvider({ children }) {
  const [count, setCount] = useState(1);
  return (
    <NumberContext.Provider value={{ count, setCount }}>
      {children}
    </NumberContext.Provider>
  );
}

///////////////////////////////
