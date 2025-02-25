"use client";

import Link from "next/link";
import NumberBox from "@/app/components/NumberBox";
import { useState, useEffect } from "react";

export default function Estimation() {
  const [horses, setHorses] = useState(0);
  const [boxes, setBoxes] = useState(0);
  const [screens, setScreens] = useState(0);

  // Chargement des valeurs depuis localStorage uniquement côté client
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
    <div className="bg-primary-dark text-white px-10 py-28 my-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Section texte et boutons */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">ESTIMEZ VOTRE PRIX</h2>
          <p className="mt-4 text-lg">
            Fini les ardoises obsolètes et les erreurs : optez pour nos écrans
            e-Ink robustes et entièrement personnalisables pour une gestion
            optimale de vos boxes.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link href="/solution">
              <button className="border border-white px-4 py-2 rounded">
                En savoir plus
              </button>
            </Link>
            <Link href="/devis">
              <button className="bg-white text-yellow-800 px-4 py-2 rounded">
                Demander un devis
              </button>
            </Link>
          </div>
        </div>

        {/* Section des inputs et estimation */}
        <div className="flex-[2] flex justify-center items-center ">
          <div className="flex overflow-hidden rounded-sm border space-x-[1px]">
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
            <div className="p-6 text-center h-64 flex items-center w-40 flex-wrap justify-center bg-white">
              <p className="text-primary-dark text-md">Votre estimation :</p>
              <div className="text-5xl text-primary-dark">
                {(horses * 10 + boxes * 15 + screens * 20)
                  .toString()
                  .padStart(3, "0")}
              </div>
              <p className="text-primary-dark text-sm">
                <span className="text-2xl font-bold">€</span> Par mois{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
