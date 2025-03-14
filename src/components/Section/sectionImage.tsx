import Image from "next/image";

export default function SectionImage() {
  return (
    <div className="flex flex-col md:flex-row gap-3.5 md:gap-10 w-full">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-8 md:space-y-0">
        <figure className="w-full max-w-[620px] h-full">
          <Image
            alt="image"
            src=""
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-xl"
          />
        </figure>
        <div className="mb-1">
          <div className="mb-3 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold">Teste</h1>
          </div>
          <div className="mt-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quam architecto nisi! Quos aliquam dolores reiciendis harum fuga
              sint quo dolorem quas dolore, accusamus molestias, natus, adipisci
              expedita eaque quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
