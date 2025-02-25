import Link from "next/link";
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
      className="bg-navbg border absolute mt-12 top-0 border-gray-700 shadow-lg w-[230px] right-0"
    />
  );
}

interface DropdownBodyProps extends ComponentProps<"div"> {}

export function DropdownBody(props: DropdownBodyProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="flex list-none justify-center flex-col"
    >
      <ul className="space-y-2 w-full">{props.children} </ul>
    </div>
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

interface DropdownLinkProps extends ComponentProps<"li"> {
  href: string;
}

export function DropdownLink({ href, ...props }: DropdownLinkProps) {
  return (
    <li
      className="px-4 py-3 text-gray-200 hover:bg-gray-800  cursor-pointer"
      {...props}
    >
      <Link href={href}>{props.children}</Link>
    </li>
  );
}
