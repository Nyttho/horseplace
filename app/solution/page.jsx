import HeroSection from "../components/solution_page/HeroSection";
import WhatSection from "../components/solution_page/WhatSection";
import WhySection from "../components/solution_page/WhySection";
import Estimation from "@/app/components/Estimation";

export default async function Solution() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/solution?populate=*`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    const solution = data.data;

    console.log(solution);

    return (
      <>
        <HeroSection heroContent={solution.Header} />
        <WhatSection whatContent={solution.whatSection} />
        <WhySection whyContent={solution.whySection} />
        <Estimation />
      </>
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
