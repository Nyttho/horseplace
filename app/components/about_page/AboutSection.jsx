import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-secondary-light min-h-screen py-16 px-20 text-primary-dark ">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
        <h2 className="text-center text-6xl font-extrabold">
          À propos de nous
        </h2>
        <p className="text-xl">
          Tout a commencé par une observation simple mais récurrente: <br />
          dans le milieu équestre, la gestion quotidienne des écuries, des boxes
          et des soins des chevaux est souvent complexe, stressante et
          chronophage.
        </p>
        <p className="text-xl">
          En échangeant avec des propriétaires d'écuries, des cavaliers
          professionnels, des soigneurs équins et des gérants de centre
          équestres, j'ai réalisé à quel point cette charge mentale pesait pour
          eux.
        </p>
        <p className="text-xl">
          C'est à ce moment-là que Horsplace est né : une solution innovante
          pour simplifier l'organisation des écuries et optimiser le suivi des
          chevaux.
        </p>
        <p className="text-xl">
          Horsplace révolutionne la gestion des infrastructures équestres grâce
          à des technologies numériques durables.
        </p>
        <p className="text-xl">
          Nous développons des solutions adaptées aux besoins des exploitants
          équestres, notamment : Un écran e-ink connecté remplaçant la
          traditionnelle ardoise de box, offrant une mise à jour en temps réél
          des informations.
        </p>

        <Link href="/devis">
          <div className="bg-primary-dark text-white mt-10 py-1 rounded-md text-center w-52  px-10 mx-auto">
            Demander un devis
          </div>
        </Link>
      </div>
    </section>
  );
}
