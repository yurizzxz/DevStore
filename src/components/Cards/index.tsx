import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const cardData = [
  {
    title: "Notebook Gamer aaaaaaaa",
    description: "Description of Card 1. A very long description that will overflow if not handled properly.",
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

const Cards = ({ title, description, image, link }: CardProps) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="bg-navbg border border-gray-900 max-w-[250px] rounded-xl my-4 cursor-pointer flex flex-col h-auto">
        <Image alt={title} width={250} height={120} src={image} />
        <div className="card-content p-4 gap-2 flex flex-col flex-grow">
          <h2 className="card-title text-xl font-semibold">{title}</h2>
          <p className="card-description text-sm text-gray-200 break-words">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const CardList = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {cardData.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardList;
