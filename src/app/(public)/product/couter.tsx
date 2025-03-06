"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CounterProps {
  count: number;
  handleCount: (step: number) => void;
}

export function Counter({ count, handleCount }: CounterProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg">Quantidade: </h1>
      <div className="flex items-center px-2 py-3 gap-2 w-fit rounded-xl bg-gray-600">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => handleCount(-1)}
          className="text-white rounded-lg cursor-pointer"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="text-xl mx-2">{count}</span>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => handleCount(1)}
          className="text-white rounded-lg cursor-pointer"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
