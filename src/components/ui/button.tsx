import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonPrimaryProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function ButtonPrimary({ className, ...props }: ButtonPrimaryProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "px-6 py-3 bg-purple-bold flex items-center rounded-lg shadow-md hover:bg-green-700 transition duration-300 cursor-pointer hover:bg-purple-hover",
        className
      )}
    />
  );
}

interface ButtonSecondaryProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function ButtonSecondary({ className, ...props }: ButtonSecondaryProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "px-6 py-3 bg-gray-600 flex h-fit items-center rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer hover:bg-gray-800",
        className
      )}
    />
  );
}
