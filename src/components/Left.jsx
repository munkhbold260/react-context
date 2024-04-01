import { UseNumber } from "@/context/NumChangeContext";
import { useTheme } from "@/context/ThemeChangeContext";
import React from "react";

export const Left = () => {
  const { theme } = useTheme();
  const divClassName = `w-1/2 py-10 ${
    theme == "light" ? "bg-white" : "text-white bg-black"
  }`;

  const { count, setCount } = UseNumber();
  const numIncrease = () => {
    setCount(count + 1);
  };

  const numDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div className={divClassName}>
      <button className="bg-green-300 px-5 " onClick={numIncrease}>
        +
      </button>
      <button className="bg-green-300 px-5" onClick={numDecrease}>
        -
      </button>
    </div>
  );
};
