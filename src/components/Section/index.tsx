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
  description,
  children,
  seeAllLink,
  seeAllText = "Ver tudo",
}: SectionProps) {
  return (
    <section className="px-1">
      <div className="max-w-[1440px] mx-auto">
        <header className="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="pr-0 md:pr-20">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {description && <p className="text-gray-200">{description}</p>}
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
