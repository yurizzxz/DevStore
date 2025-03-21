import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import NavLinks from "../Navbar/nav-links";

export default function Footer() {
  return (
    <footer className="bg-navbg border-t border-gray-700 text-white py-10 mt-10">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">DevStore</h3>
          <p className="text-sm text-gray-400">
            Seu marketplace de tecnologia, trazendo os melhores produtos para
            você.
          </p>
        </div>

        <nav className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-3">Links Úteis</h3>
          <Link href="/sobre" className="hover:underline text-gray-400">
            Sobre nós
          </Link>
          <Link href="/contato" className="hover:underline text-gray-400">
            Contato
          </Link>
          <Link
            href="/politica-de-privacidade"
            className="hover:underline text-gray-400"
          >
            Política de Privacidade
          </Link>
          <Link href="/termos-de-uso" className="hover:underline text-gray-400">
            Termos de Uso
          </Link>
        </nav>
        <nav className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-3">Produtos</h3>
          <NavLinks linkClass="hover:underline text-gray-400" />
        </nav>

        <div>
          <h3 className="text-lg font-semibold mb-3">Suporte</h3>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-gray-400">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} DevStore. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
