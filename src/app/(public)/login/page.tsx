"use client";

import { ButtonPrimary } from "@/components/ui/button";
import { InputField, InputIcon, InputRoot } from "@/components/ui/input";
import { Lock, User, IdCard, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [rua] = useState("");
  const [cidade] = useState("");
  const [estado] = useState("");
  const [cep] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (isRegister && !name)) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          telefone,
          cpf,
          rua,
          cidade,
          estado,
          cep,
          type: isRegister ? "register" : "login",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      login(data.token);

      if (isRegister) {
        setMessage("Cadastro realizado com sucesso! Agora faça login.");
        setIsRegister(false);
      } else {
        localStorage.setItem("token", data.token);
        router.push("/");
      }
    } catch (error) {
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-[#4400CD] hidden md:flex order-2 max-w-2xl rounded-r-2xl h-175">
        <Image
          src="/vetor1.svg"
          alt="Login"
          width={600}
          height={600}
          className=""
        />
      </div>
      <div className="w-full flex flex-col justify-center max-w-xl h-175 p-5 md:p-18 bg-navbg rounded-l-2xl border-y border-l border-gray-800">
        <Image
          src="/devstore.png"
          alt="Logo DevStore"
          width={140}
          height={100}
          className="mx-auto md:mx-0"
        />
        <h2 className="text-2xl mt-5 font-semibold text-left text-gray-200">
          {isRegister
            ? "Cadastre-se agora para começar na DevStore!"
            : "Bem-vindo de volta! Entre com sua conta e comece a comprar!"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-4">
          {isRegister && (
            <>
              <div className="flex w-full gap-4 mb-4 flex-col">
                <InputRoot className="h-14">
                  <InputIcon>
                    <User />
                  </InputIcon>
                  <InputField
                    type="text"
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputRoot>
                <InputRoot className="h-14">
                  <InputIcon>
                    <IdCard />
                  </InputIcon>
                  <InputField
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </InputRoot>
              </div>
            </>
          )}
          <div>
            <InputRoot className="h-14">
              <InputIcon>
                <Mail />
              </InputIcon>
              <InputField
                type="email"
                placeholder="Insira seu email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputRoot>
          </div>
          <div className="mt-4">
            <InputRoot className="h-14">
              <InputIcon>
                <Lock />
              </InputIcon>
              <InputField
                type="password"
                placeholder="Insira sua senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputRoot>
          </div>
          <ButtonPrimary
            className="w-full mt-4 py-4 font-bold text-xl"
            type="submit"
          >
            {isRegister ? "Cadastrar" : "Entrar"}
          </ButtonPrimary>
        </form>

        <p
          className="text-center mt-6 text-md text-blue-500 cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? (
            <>
              Ja possui uma conta?{" "}
              <span className="text-purple">Faça login</span>
            </>
          ) : (
            <>
              Não possui uma conta?{" "}
              <span className="text-purple">Cadastre-se</span>
            </>
          )}
        </p>
        {error && (
          <p className="mt-2 text-danger text-sm text-center">{error}</p>
        )}
      </div>
      {message && (
        <div className="p-4 absolute bottom-0 right-0 mb-4 text-green-600 bg-green-200 border border-green-400 rounded-lg">
          {message}
        </div>
      )}
    </div>
  );
}
