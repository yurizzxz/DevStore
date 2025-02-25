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
      <div className="flex items-center gap-2 w-fit rounded-xl bg-gray-600">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={decrease}
          className="px-2 py-2  text-white rounded-lg cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <span className="text-xl">{count}</span>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={increase}
          className="px-2 py-2 bg-gray-600 text-white rounded-lg cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
