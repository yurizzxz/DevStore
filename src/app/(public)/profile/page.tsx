"use client";
import { ButtonPrimary } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { user } = useAuth();

  const router = useRouter();
  const loginRedirect = () => router.push("/login");
  return (
    <div className=" mx-auto pt-45 md:pt-55 bg-white rounded-lg ">
      <div className="flex items-center space-x-4 mb-8">
        {user ? (
          <>
            <Image
              src="https://via.placeholder.com/150"
              alt="Avatar"
              width={150}
              height={150}
              className="w-32 h-32 rounded-full border-2 border-gray-300"
            />
            <div>
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <p className="text-gray-400">{user?.email}</p>
              <p className="text-gray-400">{user?.telefone}</p>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
