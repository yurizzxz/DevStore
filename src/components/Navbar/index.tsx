"use client";

import React, { useState } from "react";

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
      <header className="fixed w-full text-white">
        <nav className="max-w-[1240px] mx-auto py-8 md:py-0 w-full flex justify-between items-center px-6">
          <h1 className="text-2xl font-semibold">Navbar</h1>

          <ul className="hidden md:flex space-x-8">
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

          <button
            className="md:hidden text-white"
            aria-label="Abrir menu"
            onClick={() => setIsOpen(true)}
          >
            <i className="material-icons">menu</i>
          </button>
        </nav>
      </header>

      <aside
        className={`fixed top-0 left-0 w-3/4 h-full bg-gray-800 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          className="absolute top-4 right-4 text-white"
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
        >
          <i className="material-icons">close</i>
        </button>

        <ul className="flex flex-col items-center space-y-6 mt-16">
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
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
        />
      )}
    </>
  );
};

export default Navbar;
