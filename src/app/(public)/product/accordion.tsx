"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ComponentProps } from "react";

interface AccordionRootProps extends ComponentProps<"div"> {}

export function AccordionRoot(props: AccordionRootProps) {
  return (
    <div
      {...props}
      className="w-full  mt-6 border border-gray-800 rounded-md overflow-hidden"
    />
  );
}

interface AccordionItemProps extends ComponentProps<"div"> {
  title: string;
}

export function AccordionItem({ title, ...props }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props}>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        className="w-full text-left px-6 py-6 flex justify-between items-center bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-2xl">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown className="size-5" />
        </span>
      </button>
      <AccordionBody isOpen={isOpen}>{props.children}</AccordionBody>
    </div>
  );
}

interface AccordionBodyProps extends ComponentProps<"div"> {
  isOpen: boolean;
}

export function AccordionBody({ isOpen, ...props }: AccordionBodyProps) {
  return (
    <div
      className={`grid px-3.5 transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-40 py-2.5 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden`}
      {...props}
    />
  );
}
