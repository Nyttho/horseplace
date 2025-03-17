import GridCard from "../GridCard";

export default async function StatSection() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/statistics`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    const stats = data.data;

    return (
      <section className="p-20 bg-white">
        <div className="grid grid-rows-8 grid-cols-3 gap-5 max-w-screen-xl mx-auto">
          <div className="bg-white text-primary-dark font-extrabold text-6xl col-span-2 row-span-3 flex items-center px-10">
            <p>
              Les{" "}
              <span className="underline underline-offset-8 decoration-black">
                chiffres
              </span>{" "}
              parlent d’eux-mêmes.
            </p>
          </div>

          <GridCard
            title={stats[1].title}
            percent={stats[1].value}
            text={stats[1].description}
          />

          <div className="bg-primary-dark text-white p-10 col-span-2 row-span-5 flex flex-col justify-center">
            <p className="uppercase font-bold text-sm">{stats[0].title}</p>
            <p className="text-8xl font-extrabold mt-4 leading-none">
              {stats[0].value}%
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              {stats[0].description}
            </p>
          </div>

          <GridCard
            title={stats[2].title}
            percent={stats[2].value}
            text={stats[2].description}
          />
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
