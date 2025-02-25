import Image from "next/image";

const productLabel = [
  {
    id: 1,
    name: "NotebookGamer",
    description: "Descrição do produto",
    image: "/1.jpeg",
    price: "100",
  },
];

export default function Product() {
  return (
    <div className="min-h-dvh py-8 pt-45 ">
      <p>Produtos</p>
      <div className="mt-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
        {productLabel.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-10 w-full "
          >
            <div className="flex flex-col md:flex-row  gap-4">
              <div className="w-full flex flex-row md:flex-col order-2 md:order-1 gap-2 md:gap-3 max-w-[65px]  md:max-w-[75px]">
                <Image
                  alt={item.name}
                  src={item.image}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <Image
                  alt={item.name}
                  src={item.image}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="w-full order-1 md:order-2 max-w-[600px]">
                <Image
                  alt={item.name}
                  src={item.image}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">{item.name}</h1>
              <p className="text-lg text-gray-400">{item.description}</p>
              <p className="text-2xl font-semibold text-green-600">
                R${item.price}
              </p>

              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Adicionar ao Carrinho
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-purple-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                  Comprar Agora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
