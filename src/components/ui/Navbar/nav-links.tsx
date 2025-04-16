"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useNavLinks } from "@/hooks/useNavLinks";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  linkClass?: string;
}

export default function NavLinks({ linkClass = "" }: NavLinksProps) {
  const links = useNavLinks();
  return (
    <>
      {links.map((link, index) => (
        <li className="list-none" key={index}>
          <Link
            href={link.href}
            className={twMerge(
              "text-white text-[1rem] hover:text-gray-400 transition-colors duration-200",
              linkClass
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
