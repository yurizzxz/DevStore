"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const initialLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog/Catálogo", label: "Catálogo" },
];

interface NavLinksProps {
  linkClass?: string;
}

export default function NavLinks({ linkClass = "" }: NavLinksProps) {
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categoria");
        const data = await response.json();

        const filteredCategories = data.filter(
          (category: { id: number }) => category.id >= 1 && category.id <= 4
        );

        const newLinks = filteredCategories.map(
          (category: { id: number; nome: string }) => ({
            href: `/catalog/${category.nome}?id=${category.id}`,
            label: category.nome,
          })
        );
        setLinks([...initialLinks, ...newLinks]);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

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
