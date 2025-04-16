import Image from "next/image";

interface SectionImageProps {
  title: string;
  description: string;
  image: string;
}
export default function SectionImage({
  title,
  description,
  image,
}: SectionImageProps) {
  return (
    <div className="flex flex-col md:flex-row gap-3.5 md:gap-10 w-full">
      <div className="flex flex-col justify-between md:flex-row space-x-0 md:space-x-12 space-y-8 md:space-y-0">
        <figure className="w-full max-w-[550px] h-full">
          <Image
            alt="image"
            src={image}
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </figure>
        <div className="mb-1 flex justify-center flex-col max-w-[800px]">
          <div className="mb-3 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>
          <div className="mt-2">
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
