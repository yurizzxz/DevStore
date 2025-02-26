"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  const increase = (): void => setCount(count + 1);
  const decrease = (): void => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg">Quantidade: </h1>
      <div className="flex items-center px-2 py-2 gap-2 w-fit rounded-xl bg-gray-600">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={decrease}
          className="  text-white rounded-lg cursor-pointer"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="text-xl mx-2">{count}</span>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={increase}
          className=" bg-gray-600 text-white rounded-lg cursor-pointer"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
