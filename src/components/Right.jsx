import { UseNumber } from "@/context/NumChangeContext";
import { useTheme } from "@/context/ThemeChangeContext";

import React from "react";

export const Right = () => {
  const { theme } = useTheme();
  const { count } = UseNumber();
  const divClassName = theme == "light" ? "bg-white" : "text-white bg-black";
  return (
    <div className="bg-blue-200 w-1/2 py-[50px] ">
      <div>
        <p>{count}</p>
      </div>
    </div>
  );
};

// import { useNumber } from "@/context/NumChangeContext";
