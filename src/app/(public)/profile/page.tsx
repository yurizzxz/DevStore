"use client";
import { useState, JSX } from "react";
import { ButtonPrimary } from "@/components/ui/button";
import { InputRoot, InputField, InputIcon } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Building,
  Globe,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface UserData {
  name: string;
  email: string;
  telefone: string;
  rua: string;
  cidade: string;
  estado: string;
  cep: string;
}

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const loginRedirect = () => router.push("/login");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen mx-auto pt-45 md:pt-55 bg-white rounded-lg">
      <h1 className="text-4xl font-bold mb-8">Perfil</h1>
      {user ? (
        <>
          <div className="flex flex-col mb-4 gap-3">
            <div className="flex items-center gap-2">
              <User />
              <h2 className="text-2xl font-semibold">{user.name}</h2>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-gray-400" />
              <h2 className="text-xl text-gray-400 font-semibold">
                {user.email}
              </h2>
            </div>
          </div>
          <ButtonPrimary onClick={() => setIsModalOpen(true)}>
            Visualizar informações
          </ButtonPrimary>

          {isModalOpen && (
            <ProfileModal
              user={user}
              onClose={() => setIsModalOpen(false)}
              logout={logout}
            />
          )}
        </>
      ) : (
        <div className="flex flex-col mx-auto items-center space-y-3">
          <p className="text-3xl font-bold text-center">
            Ops! Parece que você não está logado.
          </p>
          <ButtonPrimary className="font-bold w-70" onClick={loginRedirect}>
            Comece agora!
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
}

interface ProfileModalProps {
  user: UserData;
  onClose: () => void;
  logout: () => void;
}

function ProfileModal({ user, onClose, logout }: ProfileModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-[#000000bd] z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-navbg border border-gray-800 p-8 rounded-lg shadow-lg w-3/4 max-w-xl"
      >
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-2xl font-bold">Informações do Perfil</h2>
          <button className="cursor-pointer" onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <InputGroup icon={<User />} label="Nome" value={user?.name} />
          <InputGroup icon={<Mail />} label="E-mail" value={user?.email} />
          <InputGroup
            icon={<Phone />}
            label="Telefone"
            value={user?.telefone}
          />

          <h3 className="text-xl font-semibold mt-4">Endereço</h3>
          <InputGroup icon={<Home />} label="Rua" value={user?.rua} />
          <InputGroup icon={<Building />} label="Cidade" value={user?.cidade} />
          <InputGroup icon={<Globe />} label="Estado" value={user?.estado} />
          <InputGroup icon={<MapPin />} label="CEP" value={user?.cep} />
        </div>

        <div className="mt-6 justify-end flex">
          <ButtonPrimary onClick={logout}>Fazer Logout</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

interface InputGroupProps {
  label: string;
  value: string;
  icon?: JSX.Element;
}

function InputGroup({ label, value, icon }: InputGroupProps) {
  return (
    <div>
      <label className="text-gray-400 text-sm mb-1">{label}</label>
      <InputRoot>
        <InputField type="text" defaultValue={value} disabled />
        <InputIcon>{icon}</InputIcon>
      </InputRoot>
    </div>
  );
}
