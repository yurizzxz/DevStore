import CardList from "@/components/Cards";
import Section from "@/components/Section";
import Divisor from "@/components/ui/divisor";

export default function Home() {
  return (
    <main className="min-h-dvh pt-45 pb-15">
      <Section
        title="Produtos em Destaque"
        description="Confira nossos produtos em destaque"
        seeAllLink="/produtos"
      >
        <CardList className="gap-3 w-full" children />{" "}
      </Section>
      <Divisor className="my-15" />
      <Section
        title={"Promoções do dia"}
        description="Confira nossos produtos do dia"
      >
        <CardList className="gap-3 w-full" children />{" "}
      </Section>
    </main>
  );
}
