import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <Link
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook className="w-6 h-6 text-white hover:text-blue-600 transition-colors duration-200" />
      </Link>
      <Link
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6 text-white hover:text-pink-600 transition-colors duration-200" />
      </Link>
      <Link
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
      </Link>
    </div>
  );
}
