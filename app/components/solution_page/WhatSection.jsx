import Link from "next/link";
import SolutionIconList from "../SolutionIconList";
import horsePicto from "@/public/static/images/horse-picto.png";
import heartPicto from "@/public/static/images/heart-picto.png";
import instructionPicto from "@/public/static/images/instructions-picto.png";
import headPicto from "@/public/static/images/head-picto.png";

export default function WhatSection({ whatContent }) {
  return (
    <section className="py-14">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between items-start w-1/2 ml-40 my-28">
          <h3 className="font-bold text-2xl">{whatContent.title}</h3>
          <p className="w-3/4 text-primary-dark text-lg leading-8">
            {whatContent.text}
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
  );
}
