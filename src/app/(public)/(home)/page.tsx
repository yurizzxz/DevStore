import CardList from "@/components/Cards";
import Section from "@/components/Section";
import Divisor from "@/components/ui/divisor";

export default function Home() {
  return (
    <main className="min-h-dvh pt-45 pb-15">
      <Section
        title="Produtos em Destaque"
        description="Confira nossos produtos em destaque"
        seeAllLink="/catalog/{id}"
      >
        {/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
        <CardList className="space-x-4 w-full flex-wrap" children />{" "}
      </Section>
      <Divisor className="my-15" />
      <Section
        title={"Promoções do dia"}
        description="Confira nossos produtos do dia"
      >
        {/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
        <CardList className="space-x-4 w-full flex-wrap" children />{" "}
      </Section>
    </main>
  );
}
