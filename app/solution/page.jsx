import Estimation from "@/app/components/Estimation";
import Link from "next/link";
import Image from "next/image";
import horsePicto from "@/public/static/images/horse-picto.png";
import heartPicto from "@/public/static/images/heart-picto.png";
import instructionPicto from "@/public/static/images/instructions-picto.png";
import headPicto from "@/public/static/images/head-picto.png";
import eInk from "@/public/static/images/e-ink_illustration.png";
import hero from "@/public/static/images/illustration_horse_2.jpg";
import SolutionCheck from "@/app/components/SolutionCheck";
import SolutionIconList from "@/app/components/SolutionIconList";

const Solution = () => {
  return (
    <>
      {/* hero solution section */}
      <section className="h-screen">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gray-800/25 z-10"></div>
          <div className="text-white absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
            <h2 className="text-5xl text-center font-bold">
              La <span className="bg-primary-dark px-1">digitalisation</span> de
              votre écurie, enfin <span className="underline">abordable</span>
            </h2>
            <p className="text-lg text-center w-3/4 mt-12">
              Offrez à votre écurie une gestion moderne et abordable grâce à nos
              écrans e-Ink robustes et personnalisables. La digitalisation ,n'a
              jamais été aussi accessible !
            </p>
            <Link href="/tarif">
              <div className="bg-primary-dark text-white rounded-md mt-10 text-center w-60 py-5 font-bold">
                En savoir plus
              </div>
            </Link>
          </div>
          <Image
            src={hero}
            alt="cheval au galop"
            fill={true}
            className="object-cover object-top"
          />
        </div>
      </section>
      {/* qu'est ce que section */}
      <section className="py-14">
        <div className="flex">
          <div className="flex-1 flex flex-col justify-between items-start w-1/2 ml-40 my-28">
            <h3 className="font-bold text-2xl">Qu'est ce que Horsplace ?</h3>
            <p className="w-3/4 text-primary-dark text-lg leading-8">
              Horsplace est la solution conçue pour simplifier la gestion
              quotidienne des écuries en affichant directement sur un écran dans
              chaque box, toutes les informations essentielles sur le cheval.
            </p>
            <Link
              href="/a-propos"
              className="border-[1px] border-primary-dark text-primary-dark w-48 text-center p-2 text-md rounded-md"
            >
              En savoir plus sur Horsplace
            </Link>
          </div>
          <div className="bg-primary-dark p-14 w-full rounded-l-2xl flex-1">
            <ul className="text-white flex flex-col content-between w-full gap-5">
              <SolutionIconList
                icon={horsePicto}
                label="Suivi des caractéristiques du cheval"
                text="Nom, âge, alimentation spécifique, comportements à surveiller... Tout est visible en un coup d'œil."
              />
              <SolutionIconList
                icon={heartPicto}
                label="Affichage des soins et traitements"
                text="Traitements en cours, prochaine visite du vétérinaire, période de repos...Le planning est toujours à jour, sans erreur."
              />
              <SolutionIconList
                icon={instructionPicto}
                label="Instructions personnalisées pour chaque pensionnaire"
                text="Consignes précises pour le palefrenier, informations pour l'équipe de soin ou les propriétaires."
              />
              <SolutionIconList
                icon={headPicto}
                label="Fini les oublis et les confusions"
                text="Tout le monde accède aux informations au bon moment, directement sur place."
              />
            </ul>
          </div>
        </div>
      </section>

      {/* pourquoi section */}
      <section className="bg-secondary-light py-14">
        <div className="mx-40">
          <h3 className="text-2xl font-bold mb-10">
            Pourquoi choisir Horsplace ?
          </h3>
          <p className="text-primary-dark text-xl mb-10">
            Horsplace est actuellement la seule solution sur le marché capable
            de réunir toutes les fonctionnalités essentielles pour une gestion
            optimale des écuries :
          </p>
          <div className="flex items-center">
            <ul className="flex flex-col gap-5 flex-1">
              <SolutionCheck text="Robustesse extrême" />
              <SolutionCheck text="Autonomie exceptionnelle" />
              <SolutionCheck text="Affichage ultra-lisible" />
              <SolutionCheck text="Informations en temps réel" />
              <SolutionCheck text="Prix raisonnable" />
            </ul>
            <div className="bg-white grow p-10 rounded-3xl h-[420px] relative overflow-hidden">
              <h4 className="text-center text-xl font-bold">Ecran e-ink</h4>
              <div className="w-[520px] h-full absolute left-1/2 transform -translate-x-1/2 top-28">
                <Image
                  src={eInk}
                  width={500}
                  height={500}
                  alt="illustration de l'écran e-ink"
                  className="object-cover saturate-[1.60]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Estimation />
      </section>
    </>
  );
};

export default Solution;
