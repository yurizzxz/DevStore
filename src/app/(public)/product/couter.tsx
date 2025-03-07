"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CounterProps {
  count: number;
  handleCount: (step: number) => void;
}

export function Counter({ count, handleCount }: CounterProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Quantidade: </h1>
      <div className="flex items-center px-3 py-3.5 gap-2 w-fit rounded-xl bg-gray-600">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => handleCount(-1)}
          className="text-white rounded-lg cursor-pointer"
        >
          <ChevronLeft className="size-6" />
        </button>
        <span className="text-2xl font-semibold mx-2">{count}</span>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => handleCount(1)}
          className="text-white rounded-lg cursor-pointer"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
