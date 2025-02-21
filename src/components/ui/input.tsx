import type { ComponentProps } from "react";

interface InputRoot extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRoot) {
  return (
    <div
      data-error={error}
      className="group transition-all bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-3 focus-within:border-gray-100 data-[error=true]:border-red-500"
      {...props}
    />
  );
}
interface InputIcon extends ComponentProps<"span"> {}

export function InputIcon(props: InputIcon) {
  return (
    <span
      {...props}
      className="text-gray-500 transition-all group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-200 group-data-[error=true]:text-red-500"
    />
  );
}

interface InputField extends ComponentProps<"input"> {}

export function InputField(props: InputField) {
  return (
    <input
      className="bg-transparent placeholder-gray-500 transition-all outline-0 flex-1 text-gray-200"
      {...props}
    />
  );
}
