import { useEffect, useState } from "react";

const initialLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog/Catálogo", label: "Catálogo" },
];

export function useNavLinks() {
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

  return links;
}
