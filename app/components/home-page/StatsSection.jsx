import GridCard from "../GridCard";

export default function StatsSection() {
  return (
    <section className="p-20 bg-white">
      <div className="grid grid-rows-8 grid-cols-3 gap-5 max-w-screen-xl mx-auto">
        <div className="bg-white text-primary-dark font-extrabold text-6xl col-span-2 row-span-3 flex items-center px-10">
          <p>
            Les <span className="underline underline-offset-8">chiffres</span>{" "}
            parlent d’eux-mêmes.
          </p>
        </div>

        <GridCard
          title="Stress"
          percent={95}
          text="des équipes constatent une diminution du stress au travail grâce à Horsplace."
        />

        <div className="bg-primary-dark text-white p-10 col-span-2 row-span-5 flex flex-col justify-center">
          <p className="uppercase font-bold text-sm">Communication</p>
          <p className="text-8xl font-extrabold mt-4 leading-none">100%</p>
          <p className="mt-6 text-lg leading-relaxed">
            des écuries équipées rapportent une amélioration dans la
            communication interne.
          </p>
        </div>

        <GridCard
          title="Économies"
          percent={20}
          text="des coûts opérationnels économisés grâce à une gestion optimisée."
        />
      </div>
    </section>
  );
}
