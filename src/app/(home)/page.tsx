import CardList from "@/components/Cards";
import Section from "@/components/Section";
import Divisor from "./divisor";

const cardData = [
  {
    title: "Notebook Gamer aaaaaaaa",
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

export default function Home() {
  return (
    <main className="min-h-dvh pt-55">
      <Section
        title="Produtos em Destaque"
        description="Confira nossos produtos em destaque"
        seeAllLink="/produtos"
      >
        <CardList cards={cardData} />
      </Section>
      <Divisor className="my-15" />
      <Section
        title={"Promoções do dia"}
        description="Confira nossos produtos do dia"
      >
        <CardList cards={cardData} />
      </Section>
    </main>
  );
}
