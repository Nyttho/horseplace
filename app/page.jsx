import Link from "next/link";
import Image from "next/image";
import GridCard from "./components/GridCard";
import avatar from "@/public/static/images/avatar.jpeg";
import horse from "@/public/static/images/illustration_horse_1.jpeg";

export default function Home() {
  return (
    <>
      <section className="h-screen  bg-white">
        <div className="relative w-full h-full overflow-hidden">
          {/* video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video/motion.webm" type="video/webm" />
            Votre navigateur ne supporte pas la vidéo.
          </video>

          {/* content over video */}
          <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <Link
              href="/solution"
              className="py-5 px-8 text-white bg-primary-dark rounded-md text-xl hover:bg-primary-light shadow-lg"
            >
              Découvrir notre solution
            </Link>
          </div>
        </div>
      </section>

      {/*  "Ils nous font confiance" Section */}
      <section className="py-10 ">
        <div className="mb-10">
          <p className="text-black text-2xl font-bold text-center">
            Ils nous font confiance
          </p>
        </div>
        <div className="mt-3">
          <ul className="flex gap-5 justify-center items-center">
            <li className="w-16 h-16 rounded-full bg-primary-dark"></li>
            <li className="w-16 h-16 rounded-full bg-primary-dark"></li>
            <li className="w-16 h-16 rounded-full bg-primary-dark"></li>
            <li className="w-16 h-16 rounded-full bg-primary-dark"></li>
            <li className="w-16 h-16 rounded-full bg-primary-dark"></li>
            <li className="w-16 h-16 rounded-full bg-primary-dark"></li>
          </ul>
        </div>
      </section>

      {/* Citation */}
      <section className="flex flex-col p-10 bg-primary-light justify-center items-center text-white">
        <div className="text-center">
          <q className="text-2xl">
            Dans le milieu équestre, la gestion quotidienne des boxes et des
            soins des chevaux est <br /> souvent complexe, stressante et
            chronophage.
          </q>
          <div className="flex flex-col justify-center items-center">
            <div className="w-32 h-32 bg-primary-dark rounded-full my-5 overflow-hidden">
              <Image
                src={avatar}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <p>
              <span className="font-bold text-[#e5e5e5]">Vincent BRAY</span>,
              Fondateur de Horsplace
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="p-20 bg-white">
        <div className="grid grid-rows-8 grid-cols-3 gap-5 max-w-screen-xl mx-auto">
          <div className="bg-white text-primary-dark font-extrabold text-6xl col-span-2 row-span-3 flex items-center px-10">
            <p>
              Les <span className="underline underline-offset-8">chiffres</span>{" "}
              parlent d’eux-mêmes.
            </p>
          </div>

          <GridCard
            title="Stress"
            percent={95}
            text={
              "des équipes constatent une diminution du stress au travail grâce à Horsplace."
            }
          />

          <div className="bg-primary-dark text-white p-10 col-span-2 row-span-5 flex flex-col justify-center">
            <p className="uppercase font-bold text-sm">Communication</p>
            <p className="text-8xl font-extrabold mt-4 leading-none">100%</p>
            <p className="mt-6 text-lg leading-relaxed">
              des écuries équipées rapportent une amélioration dans la
              communication interne.
            </p>
          </div>

          <GridCard
            title="Économies"
            percent={20}
            text={
              "des coûts opérationnels économisés grâce à une gestion optimisée."
            }
          />
        </div>
      </section>
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
    </>
  );
}
