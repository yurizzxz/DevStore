import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { InputRoot, InputField, InputIcon } from "./input";
import Link from "next/link";
import Image from "next/image";

interface SearchResult {
  id: string;
  nome: string;
  foto: string;
  preco: number;
  categoriaId: number;
  categoriaId2: number;
  specifications: string;
  description: string;
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/search?term=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: SearchResult[] = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(handleSearch, 200);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleItemClick = () => {
    setSearchResults([]);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <InputRoot>
        <InputField
          placeholder="O que você procura?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputIcon>
          <Search />
        </InputIcon>
      </InputRoot>
      {searchResults.length > 0 && (
        <div className="mt-12 bg-navbg w-full border border-gray-600 absolute max-w-[54.2rem] bg-white shadow-lg rounded-lg ">
          {searchResults.map((result) => (
            <Link
              href={`/product/${result.nome}?id=${
                result.id
              }&image=${encodeURIComponent(result.foto)}&price=${
                result.preco
              }&category=${result.categoriaId}&description=${
                result.description
              }&specifications=${result.specifications}`}
              key={result.id}
              className="p-3 border-b border-gray-600 last:border-none hover:bg-gray-900 cursor-pointer flex items-center"
              onClick={handleItemClick}
            >
              <Image
                src={result.foto}
                alt={result.nome}
                width={50}
                height={50}
                className="mr-3"
              />
              {result.nome}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
