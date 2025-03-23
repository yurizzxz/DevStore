import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputRoot extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, className, ...props }: InputRoot) {
  return (
    <div
      data-error={error}
      className={twMerge(
        "group transition-all w-full bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-3 focus-within:border-gray-100 data-[error=true]:border-red-500",
        className
      )}
      {...props}
    />
  );
}

interface InputIcon extends ComponentProps<"span"> {}

export function InputIcon({ className, ...props }: InputIcon) {
  return (
    <span
      {...props}
      className={twMerge(
        "text-gray-400 transition-all group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-200 group-data-[error=true]:text-red-500",
        className
      )}
    />
  );
}

interface InputField extends ComponentProps<"input"> {}

export function InputField({ className, ...props }: InputField) {
  return (
    <input
      className={twMerge(
        "bg-transparent placeholder-gray-400 transition-all outline-0 flex-1 text-gray-200",
        className
      )}
      {...props}
    />
  );
}
