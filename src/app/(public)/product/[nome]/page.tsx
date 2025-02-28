import CardList from "@/components/Cards";
import Section from "@/components/Section";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/button";
import Divisor from "@/components/ui/divisor";
import { Plus, ShoppingBag, ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";
import { Counter } from "../couter";

interface Params {
  nome: string;
}

interface Props {
  params: Params;
  searchParams: { category: string; price: string; image: string };
}

export default function Product({ params, searchParams }: Props) {
  const { nome } = params;
  const { category, price, image } = searchParams;

  const nomeTratado = decodeURIComponent(nome);

  return (
    <main className="min-h-dvh py-8 pt-45 ">
      <div className="mt-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="flex flex-col md:flex-row gap-3.5 md:gap-10 w-full ">
          <div className="flex flex-col md:flex-row  gap-4">
            <div className="w-full flex flex-row md:flex-col order-2 md:order-1 gap-2 md:gap-3 max-w-[65px]  md:max-w-[75px]">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-row md:flex-col order-2 md:order-1 gap-2 md:gap-3 max-w-[65px] md:max-w-[75px]">
                  {/*<Image
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
                        */}
                </div>
              </div>
            </div>
            <div className="w-full order-1 md:order-2 max-w-[620px] h-full">
              <Image
                alt={nomeTratado}
                src={image}
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mb-1">
              <div className="mb-3 flex flex-col">
                <h1 className="text-3xl font-semibold">{nomeTratado}</h1>
                <div className="items-center mt-4 gap-1.5 hidden">
                  <Star className="size-7 cursor-pointer text-gold" />
                  <Star className="size-7 cursor-pointer text-gray-500" />
                  <Star className="size-7 cursor-pointer text-gray-500" />
                  <Star className="size-7 cursor-pointer text-gray-500" />
                  <Star className="size-7 cursor-pointer text-gray-500" />

                  <span className="text-md text-gray-200 ml-2">(0)</span>
                </div>
              </div>
              <p className="text-5xl font-bold text-purple text-green-600">
                R$ {price}
              </p>
              <p className="text-md text-gray-300 mt-2 ml-0.5">
                À vista no pix com <b>10% de desconto</b>
              </p>
              <p className="text-md text-gray-300 ml-0.5">
                Em até <b>R$ {(Number.parseFloat(price) / 10).toFixed(2)}</b> em
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
      </div>
      <Divisor className="mt-30 mb-20" />
      <Section title="Talvez você goste">
        <CardList categoryId={category} className="space-x-4 flex-wrap" />
      </Section>
    </main>
  );
}
