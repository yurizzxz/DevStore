"use client";

import CartList from "@/components/ui/cart-list";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { InputField, InputIcon, InputRoot } from "../ui/input";
import {
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalRoot,
} from "../ui/modal-menu";
import SocialIcons from "../ui/network-icons";
import NavLinks from "./nav-links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [openMo, setOm] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-navbg text-white">
        <nav className="max-w-[1240px] mx-auto px-6 pb-4">
          <div className="py-4 w-full flex justify-between items-center ">
            <div className="hidden md:flex items-center space-x-4">
              <SocialIcons />
            </div>

            <Link href="/">
              <h1 className="text-2xl font-semibold md:mx-auto">Navbar</h1>
            </Link>

            <div className="flex items-center space-x-5 md:space-x-0">
              <button
                type="button"
                className="cursor-pointer flex items-center gap-3"
                onClick={() => setOm(true)}
              >
                <ShoppingCart className="size-7" />
                <span className="hidden md:block ntext-md">Carrinho</span>
              </button>
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

          <div className="pb-0 md:pb-3 ">
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

      <ModalRoot openMo={openMo} setModalOpen={setOm}>
        <ModalContent>
          <ModalHeader>
            Carrinho de compras
            <button
              type="button"
              aria-hidden
              className="cursor-pointer"
              onClick={() => setOm(false)}
            >
              <X className="size-7" />
            </button>
          </ModalHeader>

          <ModalBody>
            <CartList />
          </ModalBody>
        </ModalContent>
      </ModalRoot>
    </>
  );
};

export default Navbar;
