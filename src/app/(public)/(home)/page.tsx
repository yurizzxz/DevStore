import CardList from "@/components/Cards";
import Section from "@/components/Section";
import SectionImage from "@/components/Section/sectionImage";
import Banner from "@/components/ui/banner";
import Divisor from "@/components/ui/divisor";

export default function Home() {
  return (
    <main className="min-h-dvh pt-17  pb-15">
      <Banner />
      <Divisor className="mt-8 opacity-5" />
      <div className="pt-5 ">
        <Section
          title="Produtos Mais Vendidos"
          seeAllLink="/catalog/Produtos Mais Vendidos?id=7"
        >
          <CardList
            className="flex space-x-4 w-full flex-wrap"
            categoryId="7"
            useSwiper={true}
          />{" "}
        </Section>

        <Divisor className="my-8 opacity-5" />
        <Section
          title={"Promoções do dia"}
          description="Confira nossos produtos do dia"
        >
          <CardList
            className="flex space-x-4 w-full flex-wrap"
            categoryId="6"
            useSwiper={true}
          />
        </Section>
        <Divisor className="my-8 opacity-5" />
        <Section
          title={"Placas de vídeo"}
          seeAllLink="/catalog/Placas de vídeo?id=2"
          description="Confira nossos produtos do dia"
        >
          <CardList
            className="flex space-x-4 w-full flex-wrap"
            categoryId="2"
            useSwiper={true}
          />
        </Section>
        <Divisor className="my-15" />
        <SectionImage
          image="/section1.avif"
          title="Hardware de Alta Performance para Desenvolvedores"
          description="A DevStore é o destino ideal para quem busca notebooks poderosos, placas de vídeo de alto desempenho, memórias RAM de alta velocidade e processadores eficientes. 
        Nossos produtos são selecionados para oferecer o máximo desempenho em programação, desenvolvimento de software, modelagem 3D e até mesmo para quem gosta de um jogo depois do expediente. 
        Trabalhamos com as melhores marcas do mercado, garantindo qualidade, confiabilidade e tecnologia de ponta. 
        Se você precisa de mais velocidade para compilar códigos, renderizar projetos ou simplesmente aumentar sua produtividade, temos as melhores opções para você. 
        Invista no seu setup com os melhores componentes do mercado!"
        />
        <Divisor className="my-8 opacity-5" />
        <Section
          title={"Processadores"}
          seeAllLink="/catalog/Processadores?id=1"
          description="Confira nossos produtos do dia"
        >
          <CardList
            className="flex space-x-4 w-full flex-wrap"
            categoryId="1"
            useSwiper={true}
          />
        </Section>
      </div>
    </main>
  );
}
