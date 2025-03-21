import Image from "next/image";

export default function Banner() {
  return (
    <Image
      src="/banner1.png"
      width={1440}
      height={400}
      alt="banner promocional"
      className="mt-40 md:mt-38 w-full rounded-xl"
    />
  );
}
