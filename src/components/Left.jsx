import { useNumberProvider } from "@/context/NumChangeContext";
import { useNumber } from "@/context/NumChangeContext";

export const Left = () => {
  const { count, setCount } = useNumberProvider();
  const numIncrease = () => {
    num += 1;
  };

  const numDecrease = () => {
    num -= 1;
  };

  return (
    <div className="bg-blue-100 w-1/2 py-[50px] flex gap-10">
      <button className="bg-green-300 px-5 " onClick={numIncrease}>
        +
      </button>
      <button className="bg-green-300 px-5" onClick={numDecrease}>
        -
      </button>
    </div>
  );
};
