import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const cardData = [
  {
    id: 1,
    title:
      "Notebook Acer Nitro V15 ANV15-51-73E9 Intel Core i7-13620H, 16GB RAM, 512GB SSD, NVIDIA RTX 3050, 15.6 LED Full HD 144Hz, Linux Gutta",
    price: 3899.95,
    image: "/1.jpeg",
    link: "#",
  },
  {
    id: 2,
    title:
      "Notebook Acer Nitro V15 ANV15-51-73E9 Intel Core i7-13620H, 16GB RAM, 512GB SSD, NVIDIA RTX 3050, 15.6 LED Full HD 144Hz, Linux Gutta",
    description:
      "Description of Card 1. A very long description that will overflow if not handled properly.",
    price: 3799.95,
    image: "/1.jpeg",
    link: "#",
  },
  {
    id: 3,
    title:
      "Notebook Acer Nitro V15 ANV15-51-73E9 Intel Core i7-13620H, 16GB RAM, 512GB SSD, NVIDIA RTX 3050, 15.6 LED Full HD 144Hz, Linux Gutta",
    description: "Description of Card 2",
    price: 2999.95,
    image: "/1.jpeg",
    link: "#",
  },
  {
    id: 4,
    title:
      "Notebook Acer Nitro V15 ANV15-51-73E9 Intel Core i7-13620H, 16GB RAM, 512GB SSD, NVIDIA RTX 3050, 15.6 LED Full HD 144Hz, Linux Gutta",
    description: "Description of Card 3",
    price: 2599.95,
    image: "/1.jpeg",
    link: "#",
  },
];

interface CardProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export default function CardList({ className }: CardProps) {
  return (
    <div className={twMerge("flex", className)}>
      {cardData.map((card, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <Link
          href={`/product/${card.id}?title=${encodeURIComponent(
            card.title
          )}&image=${encodeURIComponent(card.image)}&price=${card.price}`}
          key={index}
        >
          <div className="bg-navbg border border-gray-900 w-[250px] h-[380px] rounded-xl my-4 cursor-pointer flex flex-col ">
            <div className="w-[250px] h-[250px] overflow-hidden rounded-t-xl">
              <Image
                alt={card.title}
                width={250}
                height={250}
                src={card.image}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="card-content p-4 gap-2 flex flex-col flex-grow">
              <h2 className="card-title text-xl font-semibold line-clamp-2">
                {card.title}
              </h2>
              <div className="flex items-center gap-0.5">
                <Star className="size-4 cursor-pointer text-gold" />
                <Star className="size-4 cursor-pointer text-gray-500" />
                <Star className="size-4 cursor-pointer text-gray-500" />
                <Star className="size-4 cursor-pointer text-gray-500" />
                <Star className="size-4 cursor-pointer text-gray-500" />

                <span className="text-xs text-gray-200 ml-2">(0)</span>
              </div>
              <p className="card-description text-2xl text-purple font-bold break-words line-clamp-2">
                R$ {card.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-300  ml-0.5">
                Em até <b>R$ {(card.price / 10).toFixed(2)}</b> em 10x
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
