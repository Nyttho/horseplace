import HeroSection from "./components/homepage/HeroSection";
import TrustSection from "./components/homepage/TrustSection";
import QuoteSection from "./components/homepage/QuoteSection";
import StatSection from "./components/homepage/StatSection";
import JoinSection from "./components/homepage/JoinSection";

export default async function Home() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home?populate[heroSection][populate]&populate[trustSection][populate]&populate[testimonial][populate]=authorImg&populate[contactSection][populate]=image&populate[statistics][populate]`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    const home = data.data;

    return (
      <>
        <HeroSection heroContent={home.heroSection} />
        <TrustSection trustContent={home.trustSection} />
        <QuoteSection testimonialContent={home.testimonial} />
        <StatSection />
        <JoinSection joinContent={home.contactSection} />
      </>
    );
  } catch (err) {
    console.error("Erreur lors de la récupération des données", err);
    return (
      <div className="grow text-center flex justify-center items-center">
        <h1>Erreur lors du chargement des données</h1>
      </div>
    );
  }
}
