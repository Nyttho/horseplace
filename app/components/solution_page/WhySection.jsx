import SolutionCheck from "@/app/components/SolutionCheck";
import Image from "next/image";
import eInk from "@/public/static/images/e-ink_illustration.png";

export default async function WhySection({ whyContent }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/why-lists?populate=*`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    const whyListElement = data.data;

    return (
      <section className="py-14 px-10 ">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10">{whyContent.title}</h3>
          <p className="text-primary-dark text-xl mb-10">
            {whyContent.subtitle}
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <ul className="flex flex-col gap-5 flex-1">
              {whyListElement.map((el) => (
                <SolutionCheck text={el.listElement} key={el.id} />
              ))}
            </ul>
            <div className="bg-secondary-light grow p-5 mx-auto lg:p-10 rounded-3xl h-[190px] lg:h-[420px] relative overflow-hidden w-full xl:w-auto">
              <h4 className="text-center text-xl font-bold mb-6">
                Ecran e-ink
              </h4>
              <div className="w-auto h-[100px] lg:h-[300px] mx-8 relative">
                <Image
                  src={eInk}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center top"
                  alt="illustration de l'écran e-ink"
                  className="saturate-[1.60]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error(err.message);
  }
}
