import { UseNumber } from "@/context/NumChangeContext";
import { useTheme } from "@/context/ThemeChangeContext";
import React from "react";

export const Left = () => {
  const { theme } = useTheme();
  const divClassName = theme == "light" ? "bg-white" : "text-white bg-black";

  const { count, setCount } = UseNumber();
  const numDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className={divClassName}>
      <button
        className="bg-green-300 px-5 "
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button className="bg-green-300 px-5" onClick={numDecrease}>
        -
      </button>
    </div>
  );
};
// onClick = { numIncrease };
// onClick = { numDecrease };

/* <button onClick={() => {}}></button>; */
