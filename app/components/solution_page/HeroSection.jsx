import Image from "next/image";
import Link from "next/link";
import hero from "@/public/static/images/illustration_horse_2.jpg";

export default function HeroSection({ heroContent }) {
  const titleArray = heroContent.title.split(" ");
  const emphasis = titleArray[1];
  const underline = titleArray[titleArray.length - 1];
  const illustration = `${process.env.NEXT_PUBLIC_STRAPI_URL}${heroContent.headerImg.formats.large.url}`;

  return (
    <section className="h-screen">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/25 z-10"></div>
        <div className="text-white absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
          <h2 className="text-5xl text-center font-bold">
            {titleArray[0]}{" "}
            <span className="bg-primary-dark px-1">{emphasis}</span>{" "}
            {titleArray.slice(2, -1).join(" ")}{" "}
            <span className="underline">{underline}</span>
          </h2>
          <p className="text-lg text-center w-3/4 mt-12">
            {heroContent.subtitle}
          </p>
          <Link href="/tarif">
            <div className="bg-primary-dark text-white rounded-md mt-10 text-center w-60 py-5 font-bold">
              En savoir plus
            </div>
          </Link>
        </div>
        <Image
          src={illustration}
          alt="cheval au galop"
          fill={true}
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
