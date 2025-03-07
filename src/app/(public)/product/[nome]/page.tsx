"use client";
import CardList from "@/components/Cards";
import Section from "@/components/Section";
import Divisor from "@/components/ui/divisor";
import { useCart } from "@/hooks/useCart";
import { use } from "react";
import { useCounter } from "../../../../hooks/useCounter";
import {
  ProductActions,
  ProductDescription,
  ProductHeader,
  ProductImage,
} from "../products";

interface Params {
  nome: string;
}

interface Props {
  params: Promise<Params>;
  searchParams: Promise<{
    category: string;
    price: string;
    image: string;
    description: string;
    specifications: string;
  }>;
}

export default function Product({ params, searchParams }: Props) {
  const resolvedParams = use(params);
  const resolvedSearchParams = use(searchParams);

  const { count, handleCount } = useCounter(1, 1, 2);
  const { nome } = resolvedParams;
  const { category, price, image, description, specifications } =
    resolvedSearchParams;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(price));

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const newItem = {
      nome: decodeURIComponent(nome),
      price: Number(price),
      image,
      quantity: count,
    };
    addToCart(newItem);
  };

  return (
    <main className="min-h-dvh py-8 pt-45">
      <div className="mt-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="flex flex-col md:flex-row gap-3.5 md:gap-10 w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <ProductImage image={image} alt={decodeURIComponent(nome)} />
            <div className="w-full md:w-1/2 flex flex-col">
              <ProductHeader
                nome={decodeURIComponent(nome)}
                formattedPrice={formattedPrice}
                description={decodeURIComponent(description)}
              />
              <ProductActions
                count={count}
                handleCount={handleCount}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
      <Divisor className="mt-20 mb-20" />
      <ProductDescription
        description={decodeURIComponent(description)}
        specifications={specifications}
      />
      <Divisor className="mt-20 mb-20" />
      <Section title="Talvez você goste">
        <CardList categoryId={category} className="flex space-x-4 flex-wrap" />
      </Section>
    </main>
  );
}
