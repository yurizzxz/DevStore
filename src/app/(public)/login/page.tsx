"use client";

import { ButtonPrimary } from "@/components/ui/button";
import { InputField, InputIcon, InputRoot } from "@/components/ui/input";
import { Lock, User } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [email] = useState<string>("");
  const [password] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-200">
          Login
        </h2>
        {error && (
          <p className="mt-2 text-danger text-sm text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <InputRoot className="h-14">
              <InputIcon>
                <User />
              </InputIcon>
              <InputField type="email" placeholder="Insira seu email..." />
            </InputRoot>
          </div>
          <div className="mt-4">
            <InputRoot className="h-14">
              <InputIcon>
                <Lock />
              </InputIcon>
              <InputField type="password" placeholder="Insira sua senha..." />
            </InputRoot>
          </div>
          <ButtonPrimary className="w-full mt-4 py-4 font-bold" type="submit">
            Entrar
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
