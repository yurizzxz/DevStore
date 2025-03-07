import { ButtonPrimary, ButtonSecondary } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Plus, ShoppingBag, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import { AccordionBody, AccordionItem, AccordionRoot } from "./accordion";
import { Counter } from "./couter";

interface ProductHeaderProps {
  nome: string;
  formattedPrice: string;
  description: string;
}

export function ProductHeader({
  nome,
  formattedPrice,
  description,
}: ProductHeaderProps) {
  return (
    <div className="mb-1">
      <div className="mb-3 flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold">{nome}</h1>
        <div className="items-center mt-4 gap-1.5 hidden">
          <Star className="size-7 cursor-pointer text-gold" />
          <Star className="size-7 cursor-pointer text-gray-500" />
          <Star className="size-7 cursor-pointer text-gray-500" />
          <Star className="size-7 cursor-pointer text-gray-500" />
          <Star className="size-7 cursor-pointer text-gray-500" />
          <span className="text-md text-gray-200 ml-2">(0)</span>
        </div>
      </div>
      <p className="text-6xl font-bold text-purple text-green-600">
        {formattedPrice}
      </p>
      <p className="text-xl text-gray-300 mt-2 ml-0.5">
        À vista no pix com <b>10% de desconto</b>
      </p>
      <p className="text-xl text-gray-300 ml-0.5">
        Em até{" "}
        <b>
          R${" "}
          {(
            Number.parseFloat(formattedPrice.replace("R$", "").trim()) / 10
          ).toFixed(2)}
        </b>{" "}
        em 10x sem juros no cartão
      </p>
      <p className="text-md text-gray-300 mt-4">{description}</p>
    </div>
  );
}

interface ProductImageProps {
  image: string;
  alt: string;
}

export function ProductImage({ image, alt }: ProductImageProps) {
  return (
    <figure className="w-full max-w-[620px] h-full">
      <Image
        alt={alt}
        src={image}
        width={600}
        height={600}
        className="w-full h-auto object-cover rounded-xl"
      />
    </figure>
  );
}

interface ProductActionsProps {
  count: number;
  handleCount: (newCount: number) => void;
  handleAddToCart: () => void;
}

export function ProductActions({
  count,
  handleCount,
  handleAddToCart,
}: ProductActionsProps) {
  return (
    <div className="flex mt-auto flex-col gap-2">
      <div className="mb-1">
        <Counter count={count} handleCount={handleCount} />
      </div>
      <div className="flex flex-row gap-3">
        <ButtonSecondary
          className="hidden gap-3 justify-center relative py-3.5"
          type="button"
        >
          <ShoppingCart className="mr-2" />
          <Plus className="size-4 absolute top-2 right-4" />
        </ButtonSecondary>
        <ButtonPrimary
          className="gap-3 w-full justify-center font-bold py-4.5 text-xl"
          type="button"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="size-7" />
          Adicionar ao carrinho
        </ButtonPrimary>
      </div>
      <div className="bg-gray-900 px-3 py-4 border border-purple rounded-xl flex justify-center gap-3 items-center">
        <Truck />
        <h2 className="font-semibold">Frete grátis para todo o Brasil!</h2>
      </div>
    </div>
  );
}

interface ProductDescriptionProps {
  description: string;
  specifications: string;
}

export function ProductDescription({
  description,
  specifications,
}: ProductDescriptionProps) {
  return (
    <>
      <AccordionRoot>
        <AccordionItem title="Descrição do produto">
          <AccordionBody isOpen>
            <p className="text-md">{description}</p>
          </AccordionBody>
        </AccordionItem>
      </AccordionRoot>

      <AccordionRoot>
        <AccordionItem title="Informações Técnicas">
          <AccordionBody isOpen>
            <p className="text-md">
              {specifications
                ? JSON.stringify(specifications)
                : "Sem informações técnicas disponíveis."}
            </p>
          </AccordionBody>
        </AccordionItem>
      </AccordionRoot>
    </>
  );
}
