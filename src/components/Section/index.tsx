import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  seeAllLink?: string;
  seeAllText?: string;
}

export default function Section({
  title,
  children,
  seeAllLink,
  seeAllText = "Ver tudo",
}: SectionProps) {
  return (
    <section className="px-1">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="pr-0 md:pr-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
            <div className="w-70 md:w-full h-1.5 bg-purple-bold rounded-full mt-4"></div>
          </div>
          {seeAllLink && (
            <Link href={seeAllLink}>
              <span className="bg-gray-900 flex items-center justify-center mt-3 md:mt-0 px-4 py-3 rounded-xl transition-all text-purple cursor-pointer w-full hover:bg-gray-800">
                <span className="font-semibold text-sm ml-1">{seeAllText}</span>
                <ChevronRight className="ml-2 size-4" />
              </span>
            </Link>
          )}
        </header>

        <div>{children}</div>
      </div>
    </section>
  );
}
