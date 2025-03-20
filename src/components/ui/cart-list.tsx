import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartList() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className="max-h-150 overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              href={{
                pathname: `/product/${item.nome}`,
                query: {
                  id: item.id,
                  nome: item.nome,
                  image: item.image,
                  price: item.price,
                  category: item.category,
                  description: item.description,
                  specifications: item.specifications,
                },
              }}
            >
              <div className="px-5 pt-3 pb-5 border-b border-gray-700 flex relative items-center space-x-4">
                <div>
                  <Image
                    alt={item.nome}
                    width={125}
                    height={125}
                    src={item.image}
                    className="w-full h-auto object-cover rounded-sm"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{item.nome}</h2>
                  <h3 className="text-purple text-2xl font-bold">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}
                  </h3>
                  <button
                    type="button"
                    className="absolute right-5.5 bottom-5.5 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveItem(index);
                    }}
                  >
                    <Trash className="text-danger" />
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="px-6 mt-5 text-gray-400">
            Nenhum item adicionado no carrinho.
          </p>
        )}
      </div>
    </div>
  );
}
