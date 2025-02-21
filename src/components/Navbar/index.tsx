"use client";

import React, { useState } from "react";
import { X, Menu, Search } from "lucide-react";
import { InputRoot, InputField, InputIcon } from "../ui/input";

interface Links {
  href: string;
  label: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links: Links[] = [
    { href: "/", label: "Home" },
    { href: "#", label: "Sobre" },
    { href: "#", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-navbg text-white">
        <nav className="max-w-[1240px] mx-auto py-4 md:py-4 w-full flex justify-between items-center px-6">
          <h1 className="text-2xl font-semibold">Navbar</h1>

          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-5 items-center">
              {Links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gray-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <InputRoot>
              <InputField type="text" placeholder="Search" />
              <InputIcon>
                <Search></Search>
              </InputIcon>
            </InputRoot>
          </div>
          <button
            className="md:hidden text-white"
            aria-label="Abrir menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="size-7" />
          </button>
        </nav>
      </header>

      <aside
        className={`fixed top-0 left-0 w-3/4 z-50 h-full bg-navbg  transition-transform duration-300 ease-in-out md:hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          className="absolute top-7 right-4 "
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
        >
          <X className="size-7" />
        </button>

        <ul className="flex flex-col ml-5 space-y-6 mt-24">
          {Links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-white text-lg hover:text-gray-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
        />
      )}
    </>
  );
};

export default Navbar;
