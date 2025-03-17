import Link from "next/link";
import Image from "next/image";
import horse from "@/public/static/images/illustration_horse_1.jpeg";

export default function JoinSection() {
  return (
    <section>
      <div className="relative w-full h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/25 z-10"></div>
        <div className="absolute top-1/2 left-40 transform -translate-y-1/2 z-20 text-white space-y-3">
          <p className="font-bold text-4xl">
            Prêt à rejoindre la révolution équestre ?
          </p>
          <p className="text-3xl">Demandez votre devis gratuit.</p>
        </div>
        <div className="absolute z-20 top-1/2 right-48 transform -translate-y-1/2 flex flex-col gap-3">
          <Link href="/devis">
            <div className="bg-white text-primary-dark py-1 rounded-md text-center font-bold w-52  px-10">
              Demander un devis
            </div>
          </Link>
          <Link href="/contact">
            <div className="bg-transparent text-white p-3 rounded-md border-[3px] border-white text-center">
              Nous contacter
            </div>
          </Link>
        </div>
        <Image
          src={horse}
          fill
          className="object-cover object-[0%_35%]"
          alt="image of a horse "
        />
      </div>
    </section>
  );
}
