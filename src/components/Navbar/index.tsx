"use client";

import CartList from "@/components/ui/cart-list";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DropdownBody, DropdownLink, DropdownRoot } from "../ui/dropdown-menu";
import { InputField, InputIcon, InputRoot } from "../ui/input";
import {
  SidebarBody,
  SidebarContent,
  SidebarHeader,
  SidebarRoot,
} from "../ui/sidebar";
import NavLinks from "./nav-links";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [openMo, setOm] = useState<boolean>(false);

  const { user, logout } = useAuth();

  const [openDropdown, setDropdownOpen] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-navbg border-b border-gray-800">
        <div className="p-1 flex justify-center bg-purple">
          <p>20% de desconto na primeira compra</p>
        </div>
        <nav className="max-w-[1440px] mx-auto px-6 pb-4 ">
          <div className="py-5 w-full flex justify-between items-center ">
            <Link href="/">
              <Image
                alt="DevStore"
                src="/devstore.png"
                width={125}
                height={120}
                className="w-full h-auto"
              />
            </Link>

            <div className="hidden md:flex px-12 mt-2 w-full">
              <InputRoot>
                <InputIcon>
                  <Search />
                </InputIcon>
                <InputField placeholder="O que você procura?" />
              </InputRoot>
            </div>

            <div className="relative flex items-center space-x-3 md:gap-4 md:space-x-0">
              <button
                type="button"
                className="cursor-pointer flex items-center gap-3"
                onClick={() => setOm(true)}
              >
                <ShoppingCart className="size-7" />
                <span className="hidden md:block ntext-md">Carrinho</span>
              </button>
              <button
                type="button"
                className="cursor-pointer flex items-center gap-1 w-full"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <User className="size-7" />
                {user ? (
                  <span className="hidden md:block text-md">Perfil</span>
                ) : (
                  <span className="hidden md:block text-md">Entrar</span>
                )}
              </button>
              {/*  oignore lint/style/useSelfClosingElements: <explanation> */}
              <DropdownRoot
                openDo={openDropdown}
                setDropdownOpen={setDropdownOpen}
              >
                {user ? (
                  <DropdownBody>
                    <p className="px-4 py-3">Olá, {user.name}!</p>
                    <DropdownLink href="/profile">Perfil</DropdownLink>
                    <DropdownLink href="/" onClick={logout}>
                      Sair
                    </DropdownLink>
                  </DropdownBody>
                ) : (
                  <DropdownBody>
                    <DropdownLink href="/login">Entrar</DropdownLink>
                  </DropdownBody>
                )}
              </DropdownRoot>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                className="md:hidden text-white"
                aria-label="Abrir menu"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="size-7" />
              </button>
            </div>
          </div>
          <div className="flex md:hidden py-2 w-full">
            <InputRoot>
              <InputIcon>
                <Search />
              </InputIcon>
              <InputField placeholder="O que você procura?" />
            </InputRoot>
          </div>
          <div className="hidden md:flex items-center justify-center py-2">
            <ul className="flex flex-row space-x-5 items-center">
              <NavLinks />
            </ul>
          </div>
        </nav>
      </header>

      <aside
        className={`fixed top-0 left-0 w-3/4 z-50 h-full bg-navbg  transition-transform duration-300 ease-in-out md:hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="absolute top-5 right-4 "
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
        >
          <X className="size-7" />
        </button>
        <ul className="flex flex-col ml-5 space-y-6 mt-24">
          <NavLinks />
        </ul>
      </aside>

      {isOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          aria-hidden={!isOpen}
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
        />
      )}

      <SidebarRoot openMo={openMo} setModalOpen={setOm}>
        <SidebarContent>
          <SidebarHeader>
            Carrinho de compras
            <button
              type="button"
              aria-hidden
              className="cursor-pointer"
              onClick={() => setOm(false)}
            >
              <X className="size-7" />
            </button>
          </SidebarHeader>

          <SidebarBody>
            <CartList />
          </SidebarBody>
        </SidebarContent>
      </SidebarRoot>
    </>
  );
};

export default Navbar;
