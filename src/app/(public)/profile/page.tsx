"use client";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className=" mx-auto pt-45 md:pt-55 bg-white rounded-lg ">
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
        <p className="text-gray-400">{user?.rua}</p>
        <p className="text-gray-400">
          {user?.cidade}, {user?.estado}, {user?.cep}
        </p>
      </div>
    </div>
  );
}
