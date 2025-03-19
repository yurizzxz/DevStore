import CardList from "@/components/Cards";

interface Params {
  nome: string;
}

interface Props {
  params: Params;
  searchParams: { id: string };
}

export default function Catalog({ params, searchParams }: Props) {
  const { nome } = params;
  const nomeTratado = decodeURIComponent(nome);
  const categoryId = searchParams?.id;

  return (
    <main className="min-h-dvh py-8 pt-45 md:pt-55">
      <div className="flex flex-row gap-4">
        <div>
          <h1 className="text-4xl mb-3 font-bold">{nomeTratado}</h1>
          <CardList
            className="grid grid-cols-5 sm:grid-cols-5 space-x-3"
            categoryId={categoryId}
          />
        </div>
      </div>
    </main>
  );
}
