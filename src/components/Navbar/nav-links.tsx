import Link from "next/link";
interface Links {
  href: string;
  label: string;
}

const Links: Links[] = [
  { href: "/", label: "Home" },
  { href: "/catalog/{id}", label: "Produtos" },
  { href: "#", label: "Sobre" },
  { href: "#", label: "Contato" },
];
export default function NavLinks() {
  return (
    <>
      {Links.map((link, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <li key={index}>
          <Link
            href={link.href}
            className="text-white text-md hover:text-gray-400 transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
