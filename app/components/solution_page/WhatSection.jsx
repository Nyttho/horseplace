import Link from "next/link";
import SolutionIconList from "../SolutionIconList";

export default async function WhatSection({ whatContent }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/what-lists?populate=*`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const data = await response.json();
    const elementList = data.data;

    console.log(elementList);
    return (
      <section className="py-20 px-5 xl:px-40 ">
        <div className="flex flex-col xl:flex-row">
          <div className="mx-auto flex-1 flex flex-col justify-between items-center xl:items-start mb-14 xl:mb-0  xl-mb-0  xl:w-1/2  xl:justify-center">
            <h3 className="font-bold text-3xl mb-5 text-center md:text-left">
              {whatContent.title}
            </h3>
            <p className="w-3/4 text-primary-dark text-lg leading-8 text-center xl:text-left">
              {whatContent.text}
            </p>
            <Link
              href="/a-propos"
              className="border-[1px] border-primary-dark text-primary-dark w-48 text-center p-2 text-md rounded-md mt-5"
            >
              En savoir plus sur Horsplace
            </Link>
          </div>
          <div className="bg-primary-dark p-5 lg:p-10 xl:p-14 rounded-2xl w-fit h-fit mx-auto">
            <ul className="text-white flex flex-col content-between w-full gap-5">
              {elementList.map((el) => {
                return (
                  <SolutionIconList
                    label={el.primaryText}
                    text={el.secondaryText}
                    key={el.id}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error("Erreur lors de la récupération des données", err);
    return (
      <div>
        <h1>Erreur lors du chargement des données</h1>
      </div>
    );
  }
}
