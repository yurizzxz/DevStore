import { useEffect, useState } from "react";

export interface Product {
  id: number;
  nome: string;
  description: string;
  price: number;
  image: string;
  category: number;
  specifications: string;
  category2: number;
}

export function useFilteredProducts(categoryId?: string) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/produto");
        const data = await response.json();

        const productList = data.map(
          (product: {
            id: number;
            nome: string;
            description: string;
            foto: string;
            preco: number;
            specifications: string;
            categoriaId: number;
            categoriaId2: number;
          }) => ({
            id: product.id,
            nome: product.nome,
            description: product.description,
            specifications: product.specifications,
            price: product.preco,
            category: product.categoriaId,
            image: product.foto,
            category2: product.categoriaId2,
          })
        );

        const filteredProducts = categoryId
          ? productList.filter(
              (product: { category: number; category2: number }) =>
                product.category === Number(categoryId) ||
                product.category2 === Number(categoryId)
            )
          : productList;

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return products;
}
