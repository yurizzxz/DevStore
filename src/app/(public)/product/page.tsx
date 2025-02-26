import { ButtonPrimary, ButtonSecondary } from "@/components/ui/button";
import { Plus, ShoppingBag, ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";
import { Counter } from "./couter";
import Section from "@/components/Section";
import CardList from "@/components/Cards";
import Divisor from "@/components/ui/divisor";

const productLabel = [
  {
    id: 1,
    name: "Notebook Acer Nitro V15 ANV15-51-73E9 Intel Core i7-13620H, 16GB RAM, 512GB SSD, NVIDIA RTX 3050, 15.6 LED Full HD 144Hz, Linux Gutta",
    image: "/1.jpeg",
    price: 3899.95,
  },
];

export default function Product() {
  return (
    <main className="min-h-dvh py-8 pt-45 ">
      <p>Produtos</p>
      <div className="mt-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
        {productLabel.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-10 w-full "
          >
            <div className="flex flex-col md:flex-row  gap-4">
              <div className="w-full flex flex-row md:flex-col order-2 md:order-1 gap-2 md:gap-3 max-w-[65px]  md:max-w-[75px]">
                <Image
                  alt={item.name}
                  src={item.image}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <Image
                  alt={item.name}
                  src={item.image}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="w-full order-1 md:order-2 max-w-[600px]">
                <Image
                  alt={item.name}
                  src={item.image}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="mb-1">
                <div className="mb-3 flex flex-col">
                  <h1 className="text-3xl font-semibold">{item.name}</h1>
                  <div className="flex items-center mt-4 gap-1.5">
                    <Star className="size-7 cursor-pointer text-gold" />
                    <Star className="size-7 cursor-pointer" />
                    <Star className="size-7 cursor-pointer" />
                    <Star className="size-7 cursor-pointer" />
                    <Star className="size-7 cursor-pointer" />

                    <span className="text-md text-gray-200 ml-2">(0)</span>
                  </div>
                </div>
                <p className="text-5xl font-bold text-purple text-green-600">
                  R$ {item.price}
                </p>
                <p className="text-md text-gray-300 mt-2 ml-0.5">
                  À vista no pix com <b>10% de desconto</b>
                </p>
                <p className="text-md text-gray-300 ml-0.5">
                  Em até <b>R$ {(productLabel[0].price / 10).toFixed(2)}</b> em
                  10x sem juros no cartão
                </p>
              </div>

              <div className="flex mt-auto flex-col gap-2">
                <div className="mb-1">
                  <Counter />
                </div>
                <div className="flex flex-row gap-3">
                  <ButtonSecondary
                    className="gap-3 justify-center relative py-3.5"
                    type="button"
                  >
                    <ShoppingCart className="mr-2" />
                    <Plus className="size-4 absolute top-2 right-4" />
                  </ButtonSecondary>
                  <ButtonPrimary
                    className="gap-2 w-full justify-center font-bold py-3.5"
                    type="button"
                  >
                    <ShoppingBag />
                    Comprar agora
                  </ButtonPrimary>
                </div>
                <div className="bg-gray-900 px-3 py-4 border border-purple rounded-xl flex justify-center gap-3 items-center">
                  <Truck />
                  <h2 className="font-semibold">
                    Frete grátis para todo o Brasil!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divisor className="mt-30 mb-20" />
      <Section title="Talvez você goste">
        <CardList children className="gap-3" />
      </Section>
    </main>
  );
}
