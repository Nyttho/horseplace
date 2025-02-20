import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/static/images/avatar.jpeg";

export default function Home() {
  return (
    <>
      <section className="h-screen  bg-swhite">
        <div className="relative w-full h-full overflow-hidden">
          {/* Vidéo en fond */}
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

          {/* Contenu par-dessus la vidéo */}
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

      {/* Section "Ils nous font confiance" */}
      <section className="py-10 ">
        <div className="mb-8">
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
              <span className="font-bold">Vincent Bray</span>, Fondateur de
              Horsplace
            </p>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="p-20 bg-secondary-light">
        <div className="grid grid-rows-8 grid-cols-3 gap-5 max-w-screen-xl mx-auto">
          {/* Rectangle 1 */}
          <div className="bg-primary-dark text-white p-5 text-5xl col-span-2 row-span-2">
            <p>Les chiffres parlent d'eux-mêmes.</p>
          </div>

          {/* Carte 1 */}
          <div className="bg-white text-primary-dark px-5 row-span-4 flex flex-col justify-around">
            <p className="text-2xl">Stress</p>
            <p>
              <span className="text-4xl">95%</span> des équipes constatent une
              diminution du stress au travail grâce à Horsplace.
            </p>
          </div>

          {/* Rectangle 2 */}
          <div className="bg-secondary-dark text-white p-8 col-span-2 row-span-6 flex flex-col justify-between">
            <div className="bg-primary-dark w-fit p-5">Communication</div>
            <div className="bg-primary-dark p-5 mt-5 h-full">
              <span className="text-4xl">85%</span> des écuries équipées
              rapportent une amélioration dans la communication interne.
            </div>
          </div>

          {/* Carte 2 */}
          <div className="bg-white text-primary-dark px-5 row-span-4 flex flex-col justify-around">
            <p className="text-2xl">Économies</p>
            <p>
              <span className="text-4xl">20%</span> des coûts opérationnels
              économisés grâce à une gestion optimisée.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
