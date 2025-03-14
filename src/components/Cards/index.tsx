"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ComponentProps, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentProps<"button"> {
  children?: React.ReactNode;
  categoryId?: string;
}

export default function CardList({ className, categoryId }: CardProps) {
  const [products, setProducts] = useState<
    {
      id: number;
      nome: string;
      description: string;
      price: number;
      image: string;
      category: number;
      specifications: string;
    }[]
  >([]);

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
          }) => ({
            id: product.id,
            nome: product.nome,
            description: product.description,
            specifications: product.specifications,
            price: product.preco,
            category: product.categoriaId,
            image: product.foto,
          })
        );

        const filteredProducts = categoryId
          ? productList.filter(
              (product: { category: number }) =>
                product.category === Number.parseInt(categoryId)
            )
          : productList;

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className={twMerge("", className)}>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.nome}?id=${
            product.id
          }&image=${encodeURIComponent(product.image)}&price=${
            product.price
          }&category=${product.category}&description=${
            product.description
          }&specifications${product.specifications}`}
        >
          <div className="bg-navbg border border-gray-900 w-[250px] h-[420px] mt-3 rounded-xl cursor-pointer flex flex-col">
            <div className="overflow-hidden rounded-t-xl">
              <Image
                alt={product.nome}
                width={250}
                height={250}
                src={product.image}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="card-content p-4 gap-2 flex flex-col flex-grow">
              <h2 className="card-title text-xl font-semibold line-clamp-2">
                {product.nome}
              </h2>
              <div className="hidden items-center gap-0.5">
                <Star className="size-4 cursor-pointer text-gold" />
                <Star className="size-4 cursor-pointer text-gray-500" />
                <Star className="size-4 cursor-pointer text-gray-500" />
                <Star className="size-4 cursor-pointer text-gray-500" />
                <Star className="size-4 cursor-pointer text-gray-500" />
                <span className="text-xs text-gray-200 ml-2">(0)</span>
              </div>
              <p className="card-description text-2xl text-purple font-bold break-words line-clamp-2">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-300 ml-0.5">
                Em até <b>R$ {(product.price / 10).toFixed(2)}</b> em 10x
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
