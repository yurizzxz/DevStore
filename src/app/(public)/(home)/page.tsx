"use client";

import Section from "@/components/Section";
import CardList from "@/components/Cards";
import Divisor from "@/components/ui/divisor";
import { useEffect, useState } from "react";
import Banner from "@/components/ui/banner";

interface SectionData {
  id: number;
  titulo: string;
  tipo: string;
  categoriaId?: number;
  imagem?: string;
}

export default function Home() {
  const [sections, setSections] = useState<SectionData[]>([]);

  useEffect(() => {
    fetch("/api/home-sections")
      .then((res) => res.json())
      .then(setSections);
  }, []);

  return (
    <main className="min-h-dvh pt-17 pb-15">
      <Banner />
      {sections.map((section, _idx) => {
        if (section.tipo === "cards" && section.categoriaId) {
          return (
            <div key={section.id}>
              <Divisor className="my-8 opacity-5" />
              <Section
                title={section.titulo}
                seeAllLink={`/catalog/${section.titulo}?id=${section.categoriaId}`}
              >
                <CardList
                  className="flex space-x-4 w-full flex-wrap"
                  categoryId={String(section.categoriaId)}
                  useSwiper={true}
                />
              </Section>
            </div>
          );
        }

        return null;
      })}
    </main>
  );
}
