import Offer from "../Offer";

export default async function OfferSection() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}api/offers`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    const offers = data.data[0].offers;
    return (
      <section className="bg-secondary-light py-10">
        <div className="text-primary-dark text-center mt-10">
          <h2 className="text-5xl font-bold mb-6">Offres tarifaires</h2>
          <q className="text-lg">
            Choisissez l'abonnement qui correspond à vos besoins. Aucun
            engagement caché.
          </q>
        </div>
        <div className="flex gap-14 w-3/5 mx-auto my-10 justify-center">
          {offers.map((fake) => (
            <Offer key={fake.id} offer={fake} />
          ))}
        </div>
      </section>
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
