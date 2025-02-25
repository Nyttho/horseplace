import Offer from "../components/Offer";
import avatar from "@/public/static/images/avatar.jpeg"
import Estimation from "../components/Estimation";

export default function Tarif (){
  const fakeOffers = [
    {
      id: 1,
      title: "Horsplace Intelligent Stable Manager",
      subtitle: "Gérez efficacement vos box avec une solution intégrée et automatisée.",
      img: avatar,
      features: ["Gestion automatisée des box", "Surveillance en temps réel", "Rapports et statistiques détaillés", "Notifications personnalisées"]

    },
    {
      id: 2,
      title: "Écosystème complet",
      subtitle: "Combinez les deux solutions pour une gestion et une réservation optimales.",
      img: avatar,
      features: ["Intégration fluide entre gestion et réservation", "Synchronisation des données en temps réel", "Accès centralisé aux informations", "Optimisation de la gestion des événements"]


    },
    {
      id: 3,
      title: "Horsplace Votre box à portée de clics",
      subtitle: "Réservez vos box pour les événements en toute simplicité.",
      img: avatar,
      features: ["Réservation en ligne simplifiée", "Paiement sécurisé", "Suivi des réservations", "Gestion des annulations et des remboursements"]


    },
  ]
  return( 
<>
    <section>
        <div className="flex gap-14 w-3/5 mx-auto my-10">
          {fakeOffers.map(fake => (
            <Offer key={fake.id} offer={fake}/>
          ))}
        </div>
    </section>
    <section>
      <Estimation />
    </section>
</>

);
};


