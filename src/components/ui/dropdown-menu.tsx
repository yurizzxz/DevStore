import type { ComponentProps } from "react";

interface DropdownRootProps extends ComponentProps<"div"> {
  openDo: boolean;
  setDropdownOpen: (open: boolean) => void;
}

export function DropdownRoot({
  openDo,
  setDropdownOpen,
  ...props
}: DropdownRootProps) {
  if (!openDo) return null;
  return (
    <div
      {...props}
      aria-hidden={!openDo}
      onClick={() => setDropdownOpen(false)}
      className="bg-navbg rounded-xl border absolute mt-12 top-0 border-gray-700 shadow-lg w-[230px] right-0"
    />
  );
}

interface DropdownHeaderProps extends ComponentProps<"div"> {}

export function DropdownHeader(props: DropdownHeaderProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="pb-5 border-b border-gray-700 text-xl font-semibold flex flex-row items-center justify-between p-5"
    />
  );
}

interface DropdownBodyProps extends ComponentProps<"div"> {}

export function DropdownBody(props: DropdownBodyProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className=" flex list-none justify-center flex-col"
    />
  );
}

interface DropdownFooterProps extends ComponentProps<"div"> {}

export function DropdownFooter(props: DropdownFooterProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="border-t pt-3 flex justify-end gap-2"
    />
  );
}
