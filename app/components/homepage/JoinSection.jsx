import Link from "next/link";
import Image from "next/image";
import illustrationHorse2 from "@/public/static/images/illustration_horse_2.jpg";
export default function JoinSection({ joinContent }) {
  const illustration = joinContent.horseImage?.formats?.large?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${joinContent.horseImage.formats.large.url}`
    : joinContent.horseImage?.url;

  return (
    <section>
      {/* Desktop version - only for extra large screens */}
      <div className="relative w-full h-80 overflow-hidden hidden xl:block">
        <div className="absolute inset-0 bg-gray-800/25 z-10"></div>
        <div className="absolute top-1/2 left-40 transform -translate-y-1/2 z-20 text-white space-y-3">
          <p className="font-bold text-4xl">{joinContent.title}</p>
          <p className="text-3xl">{joinContent.subtitle}</p>
        </div>
        <div className="absolute z-20 top-1/2 right-48 transform -translate-y-1/2 flex flex-col gap-3">
          <Link href="/devis">
            <div className="bg-white text-primary-dark py-1 rounded-md text-center font-bold w-52 px-10">
              Demander un devis
            </div>
          </Link>
          <Link href="/contact">
            <div className="bg-transparent text-white p-3 rounded-md border-[3px] border-white text-center">
              Nous contacter
            </div>
          </Link>
        </div>
        <div className="absolute inset-0">
          <Image
            src={illustration}
            fill
            className="object-cover object-[0%_35%]"
            alt="image of a horse"
          />
        </div>
      </div>

      {/* Mobile/Tablet version - for all screens under xl breakpoint */}
      <div className="relative w-full h-72 overflow-hidden xl:hidden">
        <div className="absolute inset-0 bg-gray-800/25 z-10"></div>
        <div className="absolute top-6 left-0 right-0 z-20 text-white text-center pb-10">
          <p className="font-bold text-2xl sm:text-3xl">{joinContent.title}</p>
          <p className="text-xl sm:text-2xl">{joinContent.subtitle}</p>
        </div>
        <div className="absolute z-20 bottom-8 left-0 right-0 flex flex-col items-center gap-4">
          <Link href="/devis">
            <div className="bg-white text-primary-dark py-2 rounded-md text-center font-bold w-48 sm:w-52">
              Demander un devis
            </div>
          </Link>
          <Link href="/contact">
            <div className="bg-transparent text-white py-2 rounded-md border-2 border-white text-center w-48 sm:w-52">
              Nous contacter
            </div>
          </Link>
        </div>
        <div className="absolute inset-0">
          <Image
            src={illustration}
            fill
            className="object-cover object-[50%_40%] scale-[1.8] -translate-x-5"
            alt="image of a horse"
          />
        </div>
      </div>
    </section>
  );
}
