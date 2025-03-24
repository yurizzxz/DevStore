"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ComponentProps, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CardProps extends ComponentProps<"button"> {
  children?: React.ReactNode;
  categoryId?: string;
  useSwiper?: boolean;
}

export default function CardList({
  className,
  categoryId,
  useSwiper,
}: CardProps) {
  const [products, setProducts] = useState<
    {
      id: number;
      nome: string;
      description: string;
      price: number;
      image: string;
      category: number;
      specifications: string;
      category2: number;
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
                product.category === Number.parseInt(categoryId) ||
                product.category2 === Number.parseInt(categoryId)
            )
          : productList;

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const renderProductCard = (product: any) => (
    <Link
      key={product.id}
      href={`/product/${product.nome}?id=${
        product.id
      }&image=${encodeURIComponent(product.image)}&price=${
        product.price
      }&category=${product.category}&description=${
        product.description
      }&specifications=${product.specifications}`}
    >
      <div className="bg-navbg border hover:border-gray-500 transition-all border-gray-900 w-[200px] h-[370px] md:w-[230px] md:h-[400px] mt-3 rounded-xl cursor-pointer flex flex-col">
        <div className="overflow-hidden rounded-t-xl">
          <Image
            alt={product.nome}
            width={200}
            height={200}
            src={product.image}
            className="object-cover w-[240px] md:h-[220px]"
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
            {formatCurrency(product.price)}
          </p>
          <p className="text-sm text-gray-300 ml-0.5">
            Em até <b>{formatCurrency(product.price / 10)}</b> em 10x sem juros
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <div className={twMerge("", className)}>
      {useSwiper ? (
        <Swiper
          slidesPerView={1.35}
          breakpoints={{
            1024: { slidesPerView: 5.8 },
            768: { slidesPerView: 3.2 },
            660: { slidesPerView: 3.25 },
            560: { slidesPerView: 2.55 },
            490: { slidesPerView: 2.21 },
            450: { slidesPerView: 2.3 },
            390: { slidesPerView: 1.8 },
            340: { slidesPerView: 1.5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              {renderProductCard(product)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 w-full gap-4">
          {products.map(renderProductCard)}
        </div>
      )}
    </div>
  );
}
