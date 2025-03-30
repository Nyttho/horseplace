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
      <section className="bg-white mb-12 md:mb-16 lg:mb-20">
        {/* Mobile et Tablette layout (flex column) */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Les chiffres parlent d'eux-même */}
          <div className="bg-white text-black text-center font-bold text-4xl md:text-5xl py-10 px-4 md:px-6 max-w-screen-xl mx-auto">
            <p>Les chiffres parlent d'eux-même.</p>
          </div>

          <div className="bg-primary-dark text-white p-8 flex flex-col justify-center w-full">
            <div className="max-w-screen-xl mx-auto px-10">
              <p className="uppercase font-bold text-2xl md:text-3xl">
                {stats[0].title}
              </p>

              <p className="mt-6 text-base md:text-lg leading-relaxed ">
                <span className="text-5xl md:text-7xl mt-4 leading-none">
                  {stats[0].value}%
                </span>{" "}
                {stats[0].description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-screen-xl mx-auto px-4 md:px-6">
            <GridCard
              title={stats[1].title}
              percent={stats[1].value}
              text={stats[1].description}
            />
            <GridCard
              title={stats[2].title}
              percent={stats[2].value}
              text={stats[2].description}
            />
          </div>
        </div>

        {/* Desktop layout (original grid structure) */}
        <div className="hidden lg:block p-20">
          <div
            className="grid grid-cols-3 gap-6 max-w-screen-xl mx-auto"
            style={{ gridTemplateRows: "repeat(8, 60px)" }}
          >
            <div className="bg-white text-black font-extrabold text-6xl col-span-2 row-span-4 flex items-end py-14 px-10 py-auto">
              <p>Les chiffres parlent d'eux-même.</p>
            </div>

            <GridCard
              title={stats[1].title}
              percent={stats[1].value}
              text={stats[1].description}
            />

            <div className="bg-primary-dark text-white p-12 col-span-2 row-start-6 row-span-3 flex flex-col justify-center">
              <p className="uppercase font-bold text-3xl">{stats[0].title}</p>
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
        </div>
      </section>
    );
  } catch (err) {
    console.error("Erreur lors de la récupération des données", err);
    return (
      <div className="p-4">
        <h1>Erreur lors du chargement des données</h1>
      </div>
    );
  }
}
