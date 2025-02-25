import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

interface CardListProps {
  cards: CardProps[];
}

const Cards = ({ title, description, image }: CardProps) => {
  return (
    <Link href="/product">
      <div className="bg-navbg border border-gray-900 w-[250px] rounded-xl my-4 cursor-pointer flex flex-col h-[380px]">
        <Image alt={title} width={250} height={250} src={image} />
        <div className="card-content p-4 gap-2 flex flex-col flex-grow">
          <h2 className="card-title text-xl font-semibold line-clamp-2">
            {title}
          </h2>
          <p className="card-description text-sm text-gray-200 break-words line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {cards.map((card, index) => (
        <Cards
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardList;
