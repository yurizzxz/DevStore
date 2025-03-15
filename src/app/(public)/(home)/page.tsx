import CardList from "@/components/Cards";
import Section from "@/components/Section";
import SectionImage from "@/components/Section/sectionImage";
import Divisor from "@/components/ui/divisor";

export default function Home() {
  return (
    <main className="min-h-dvh pt-15 md:pt-10 pb-15">
      <Section
        title="Produtos em Destaque"
        description="Confira nossos produtos em destaque"
        seeAllLink="/catalog/Produtos em Destaque?id=5"
      >
        <CardList className="flex space-x-4 w-full flex-wrap" categoryId="1" />{" "}
      </Section>
      <Divisor className="my-15" />
      <SectionImage
        image="/section1.avif"
        title="Titulo"
        description="Descrição"
      />
      <Divisor className="my-15" />
      <Section
        title={"Promoções do dia"}
        description="Confira nossos produtos do dia"
      >
        <CardList className="flex space-x-4 w-full flex-wrap" categoryId="3" />
      </Section>
    </main>
  );
}
