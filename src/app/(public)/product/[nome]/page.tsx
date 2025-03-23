"use client";
import CardList from "@/components/Cards";
import Section from "@/components/Section";
import Divisor from "@/components/ui/divisor";
import { useCart } from "@/hooks/useCart";
import { useCounter } from "@/hooks/useCounter";
import { ShoppingCart } from "lucide-react";
import { use } from "react";
import {
  ProductActions,
  ProductDescription,
  ProductHeader,
  ProductImage,
} from "../products";
import { formatCurrency } from "@/app/utils/formatCurrency";

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

  const { addToCart, message } = useCart();

  const formattedPrice = formatCurrency(Number(price));

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
    <main className="min-h-dvh pb-8 pt-45 md:pt-55">
      {message && (
        <div className="bg-gray-900 border border-gray-800 text-gray-100 p-4 rounded-lg shadow-lg absolute bottom-4 right-4 max-w-xs transition-transform transform duration-300 ease-in-out">
          <p className="font-semibold text-xl">Sucesso!</p>
          <div className="flex items-center gap-2 mt-2">
            <ShoppingCart />
            <p>{message}</p>
          </div>
        </div>
      )}
      <div className="mt-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="flex flex-col md:flex-row gap-3.5 md:gap-10 w-full">
          <div className="flex w-full flex-col md:flex-row space-x-0 md:space-x-12 space-y-8 md:space-y-0">
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
