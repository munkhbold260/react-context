import React, { useContext, createContext, useState } from "react";
import { Right } from "@/components/Right";

const NumChangeContext = createContext();
export const useNumber = () => useContext(NumChangeContext);

export function NumberProvider({ children }) {
  const [count, setCount] = useState(num);

  return (
    <NumChangeContext.Provider value={{ count, setCount }}>
      {children}
    </NumChangeContext.Provider>
  );
}

let num = 0;
