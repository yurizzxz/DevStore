import { Trash } from "lucide-react";
import Image from "next/image";
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
      <div className="max-h-96 overflow-y-auto">
        {cartItems.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index} className="px-5 pt-3 pb-4 border-b border-gray-700">
            <div className="flex relative items-center space-x-4">
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
                  className="absolute right-0 bottom-3 cursor-pointer"
                  onClick={() => handleRemoveItem(index)}
                >
                  <Trash className="text-danger" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
