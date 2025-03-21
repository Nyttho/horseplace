import Offer from "../Offer";
import logo from "@/public/static/images/horsplace_logo.png";

export default function OfferSection() {
  const fakeOffers = [
    {
      id: 1,
      title: "Moyen écran",
      price: 89,
      img: logo,
      size: "medium",
      features: ["E-Ink", "Bluetooth", "7.5 pouces", "Autonomie de 5 ans"],
    },
    {
      id: 2,
      title: "Grand écran",
      price: 189,
      img: logo,
      size: "big",
      features: ["E-Ink", "Wifi", "11.6 pouces", "Autonomie de 6 mois"],
    },
  ];
  return (
    <section className="bg-secondary-light py-10">
      <div className="text-primary-dark text-center mt-10">
        <h2 className="text-5xl font-bold mb-6">Offres tarifaires</h2>
        <q className="text-lg">
          Choisissez l'abonnement qui correspond à vos besoins. Aucun engagement
          caché.
        </q>
      </div>
      <div className="flex gap-14 w-3/5 mx-auto my-10 justify-center">
        {fakeOffers.map((fake) => (
          <Offer key={fake.id} offer={fake} />
        ))}
      </div>
    </section>
  );
}
