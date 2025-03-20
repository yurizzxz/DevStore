"use client";
import { ButtonPrimary } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { user } = useAuth();

  const router = useRouter();
  const loginRedirect = () => router.push("/login");
  return (
    <div className=" mx-auto pt-45 md:pt-55 bg-white rounded-lg ">
      {user ? (
        <>
          <div className="flex items-center space-x-4 mb-8">
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              className="w-32 h-32 rounded-full border-2 border-gray-300"
            />
            <div>
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <p className="text-gray-400">{user?.email}</p>
              <p className="text-gray-400">{user?.telefone}</p>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Endereço</h3>
            <p className="text-gray-400">{user.rua}</p>
            <p className="text-gray-400">
              {user.cidade}, {user.estado}, {user.cep}
            </p>
          </div>
        </>
      ) : (
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex flex-col mx-auto items-center space-y-3">
            <p className="text-3xl font-bold text-center ">
              Ops! Parece que você não está logado.
            </p>
            <ButtonPrimary
              type="button"
              className="font-bold w-70"
              onClick={loginRedirect}
            >
              Comece agora!
            </ButtonPrimary>
          </div>
        </div>
      )}
    </div>
  );
}
