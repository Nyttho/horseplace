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
      <section className=" py-14">
        <div className="mx-60">
          <h3 className="text-2xl font-bold mb-10">{whyContent.title}</h3>
          <p className="text-primary-dark text-xl mb-10">
            {whyContent.subtitle}
          </p>
          <div className="flex items-center">
            <ul className="flex flex-col gap-5 flex-1">
              {whyListElement.map((el) => (
                <SolutionCheck text={el.listElement} key={el.id} />
              ))}
            </ul>
            <div className="bg-secondary-light grow p-10 rounded-3xl h-[420px] relative overflow-hidden">
              <h4 className="text-center text-xl font-bold">Ecran e-ink</h4>
              <div className="w-[520px] h-full absolute left-1/2 transform -translate-x-1/2 top-28 ">
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
    );
  } catch (err) {
    console.error(err.message);
  }
}
