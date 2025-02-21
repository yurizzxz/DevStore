import type { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

interface DivisorProps extends ComponentProps<"div"> {}

export default function Divisor({ className, ...props }: DivisorProps) {
  return (
    <div
      {...props}
      className={twMerge("border-b border-gray-700 my-5", className)}
    />
  );
}
