import React from "react";
import { useNumberProvider } from "@/context/NumChangeContext";
import { NumberProvider } from "@/context/NumChangeContext";
export const Right = () => {
  return (
    <div className="bg-blue-200 w-1/2 py-[50px]">
      <div>
        <p>{num}</p>
      </div>
    </div>
  );
};
