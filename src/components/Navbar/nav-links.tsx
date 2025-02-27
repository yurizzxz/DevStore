"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const initialLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog/Catálogo", label: "Catálogo" },
];

export default function NavLinks() {
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categoria");
        const data = await response.json();

        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const newLinks = data.map((category: { id: any; nome: any }) => ({
          href: `/catalog/${category.nome}?id=${category.id}`,
          label: category.nome,
        }));

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
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <li key={index}>
          <Link
            href={link.href}
            className="text-white text-[1rem] hover:text-gray-400 transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
