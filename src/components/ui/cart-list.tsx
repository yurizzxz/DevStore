import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonPrimary } from "./button";
import Divisor from "./divisor";
import { formatCurrency } from "@/utils/formatCurrency";

export default function CartList() {
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
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <div className="flex-grow overflow-y-auto px-5">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Link
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
              <div className="pt-3 pb-5 border-b border-gray-700 flex relative items-center space-x-4">
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
                    className="absolute right-1 bottom-5.5 cursor-pointer"
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
          <p className="mt-5 text-gray-400">
            Nenhum item adicionado no carrinho.
          </p>
        )}
      </div>

      <Divisor />

      <div className="flex-shrink-0 px-5  bg-black">
        <p className="font-semibold mb-2 text-xl">Resumo do pedido</p>
        <div className="flex text-lg justify-between mb-4">
          <p className="">Subtotal</p>
          <p>
            {formatCurrency(
              cartItems.reduce((total, item) => total + item.price, 0)
            )}
          </p>
        </div>
        <ButtonPrimary className="w-full">Finalizar compra</ButtonPrimary>
      </div>
    </div>
  );
}
