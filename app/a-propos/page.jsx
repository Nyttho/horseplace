import AboutSection from "../components/about_page/AboutSection";
import QuestionsSection from "../components/about_page/QuestionsSection";

const APropos = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-us?populate=*`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    const aboutUsData = data.data;

    console.log(aboutUsData);
    return (
      <>
        <AboutSection about={aboutUsData.aboutUs} />
        <QuestionsSection />
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
};

export default APropos;
