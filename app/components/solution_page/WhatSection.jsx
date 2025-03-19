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
              {elementList.map((el) => {
                const iconUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${el.icon.formats.thumbnail.url}`;
                return (
                  <SolutionIconList
                    icon={iconUrl}
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
