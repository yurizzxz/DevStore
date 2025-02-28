import { Trash } from "lucide-react";
import Image from "next/image";

export default function CartList() {
  return (
    <div className="border-b border-gray-700">
      <div className="px-5">
        <div className="flex relative items-center space-x-5">
          <div>
            <Image
              alt="item1"
              width={125}
              height={100}
              src="http://graph.facebook.com/{user-id}/picture?type=large"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold font-heading">item1</h2>
            <p className="text-sm text-gray-200 ">description</p>
            <h3 className="text-purple pt-3 text-xl font-bold">R$20,00</h3>
            <button type="button" className="absolute right-0 bottom-3">
              <Trash className="text-danger" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
