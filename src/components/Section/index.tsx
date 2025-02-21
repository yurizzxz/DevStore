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
      <div className="max-w-7xl mx-auto">
        <header className="mb-3 flex items-center justify-between">
          <div className="">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {description && <p className="text-gray-200">{description}</p>}
          </div>
          {seeAllLink && (
            <Link href={seeAllLink}>
              <span className="bg-gray-900 p-3 rounded-xl transition-all text-purple hover:underline cursor-pointer">
                {seeAllText}
              </span>
            </Link>
          )}
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}
