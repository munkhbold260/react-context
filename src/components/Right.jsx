import { UseNumber } from "@/context/NumChangeContext";
import { useTheme } from "@/context/ThemeChangeContext";

import React from "react";

export const Right = () => {
  const { theme } = useTheme();
  const { count } = UseNumber();
  const divClassName = `w-1/2  py-10 ${
    theme == "light" ? "bg-white" : "text-white bg-black"
  }`;
  return (
    <div className={divClassName}>
      <div>
        <p>{count}</p>
      </div>
    </div>
  );
};
// const divClassName = `w-3/4 ${
//   theme == "light" ? "bg-red-200" : "bg-green-700"
// }`;
