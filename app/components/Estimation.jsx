"use client";

import Link from "next/link";
import NumberBox from "@/app/components/NumberBox";
import { useState, useEffect } from "react";

export default function Estimation() {
  const [horses, setHorses] = useState(0);
  const [boxes, setBoxes] = useState(0);
  const [screens, setScreens] = useState(0);

  // loading values from localStorage from client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHorses(parseInt(localStorage.getItem("chevaux") || "0", 10));
      setBoxes(parseInt(localStorage.getItem("boxes") || "0", 10));
      setScreens(parseInt(localStorage.getItem("écrans") || "0", 10));
    }
  }, []);

  const handleRange = (e, setItemType) => {
    const value = e.target.value;
    const item = e.target.name;
    setItemType(parseInt(value, 10));
    localStorage.setItem(item, value);
  };

  return (
    <div className="bg-primary-dark text-white px-14 pt-12 pb-28 my-10 w-3/4 mx-auto rounded-3xl">
      <div className=" mx-auto flex flex-col md:flex-row justify-around items-center gap-10">
        {/* Section texte et boutons */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">ESTIMEZ VOTRE PRIX</h2>
          <p className="mt-4 text-lg">
            Fini les ardoises obsolètes et les erreurs : optez pour nos écrans
            e-Ink robustes et entièrement personnalisables pour une gestion
            optimale de vos boxes.
          </p>
          <div className="mt-6 flex gap-4 w-full">
            <Link href="/solution" className="flex-1">
              <button className="border border-white px-6 py-5 rounded select-none w-full">
                En savoir plus
              </button>
            </Link>
            <Link href="/devis" className="flex-1">
              <button className="bg-white text-yellow-800 px-6 py-5 rounded select-none w-full">
                Demander un devis
              </button>
            </Link>
          </div>
        </div>

        {/* Section des inputs et estimation */}
        <div className="flex-[2] flex justify-end items-center ">
          <div className="flex overflow-hidden rounded-xl border space-x-[1px]">
            <NumberBox
              amount={horses}
              itemType="chevaux"
              range={handleRange}
              setItemType={setHorses}
            />
            <NumberBox
              amount={boxes}
              itemType="boxes"
              range={handleRange}
              setItemType={setBoxes}
            />
            <NumberBox
              amount={screens}
              itemType="écrans"
              range={handleRange}
              setItemType={setScreens}
            />
            {/* Carte pour l'estimation */}
            <div className="px-6 py-12 text-center h-64 flex items-center w-40 flex-col flex-wrap justify-between bg-white">
              <p className="text-primary-dark text-md">Votre estimation :</p>
              <div className="text-3xl text-primary-dark border-[1px] border-primary-dark py-2 px-5 rounded-lg my-2 relative">
                {(horses * 10 + boxes * 15 + screens * 20)
                  .toString()
                  .padStart(3, "0")}
                €<span className="text-sm absolute top-3 right-3">*</span>
              </div>
              <p className="text-primary-dark text-sm">Par mois</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
