"use client";

import { ButtonPrimary } from "@/components/ui/button";
import { InputField, InputIcon, InputRoot } from "@/components/ui/input";
import { Lock, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
        alert("Cadastro realizado com sucesso! Agora faça login.");
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
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          {isRegister ? "Cadastro" : "Login"}
        </h2>
        {error && (
          <p className="mt-2 text-danger text-sm text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="mt-4">
          {isRegister && (
            <div className="mb-4">
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
            </div>
          )}
          <div>
            <InputRoot className="h-14">
              <InputIcon>
                <User />
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
          <ButtonPrimary className="w-full mt-4 py-4 font-bold" type="submit">
            {isRegister ? "Cadastrar" : "Entrar"}
          </ButtonPrimary>
        </form>
        <p
          className="text-center mt-4 text-sm text-blue-500 cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Já tem uma conta? Faça login"
            : "Não tem conta? Cadastre-se"}
        </p>
      </div>
    </div>
  );
}
