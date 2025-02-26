import CardList from "@/components/Cards";

export default function Catalog() {
  return (
    <main className="min-h-dvh py-8 pt-45">
      <div className="flex flex-row gap-4">
        <aside className="w-3/5 bg-navbg p-4 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Filtros</h2>
          <div>
            <label className="block mb-2">
              <input type="checkbox" /> Promoções
            </label>
            <label className="block mb-2">
              <input type="checkbox" /> Frete Grátis
            </label>
            <label className="block mb-2">
              <input type="checkbox" /> Avaliação 5 estrelas
            </label>
          </div>
        </aside>

        {/* biome-ignore lint/correctness/noChildrenProp: <explanation> */}
        <CardList className="gap-3 w-full" children={undefined} />
      </div>
    </main>
  );
}
