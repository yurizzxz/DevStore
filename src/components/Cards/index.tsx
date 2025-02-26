import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const cardData = [
  {
    title:
      "Notebook Acer Nitro V15 ANV15-51-73E9 Intel Core i7-13620H, 16GB RAM, 512GB SSD, NVIDIA RTX 3050, 15.6 LED Full HD 144Hz, Linux Gutta",
    description:
      "Description of Card 1. A very long description that will overflow if not handled properly.",
    image: "/1.jpeg",
    link: "#",
  },
  {
    title:
      "Notebook Acer Nitro V15 ANV15-51-73E9 Intel Core i7-13620H, 16GB RAM, 512GB SSD, NVIDIA RTX 3050, 15.6 LED Full HD 144Hz, Linux Gutta",
    description:
      "Description of Card 1. A very long description that will overflow if not handled properly.",
    image: "/1.jpeg",
    link: "#",
  },
  {
    title: "Card 2",
    description: "Description of Card 2",
    image: "/1.jpeg",
    link: "#",
  },
  {
    title: "Card 3",
    description: "Description of Card 3",
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
        <Link href="/product" key={index}>
          <div className="bg-navbg border border-gray-900 w-[250px] rounded-xl my-4 cursor-pointer flex flex-col h-[380px]">
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
              <p className="card-description text-sm text-gray-300 break-words line-clamp-2">
                {card.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
