import Link from "next/link";
const APropos = () => {
  return (
    <>
      <section className="bg-secondary-light min-h-screen py-16 px-20 text-primary-dark ">
        <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
          <h2 className="text-center text-6xl font-extrabold">
            À propos de nous
          </h2>
          <p className="text-xl">
            Tout a commencé par une observation simple mais récurrente: <br />
            dans le milieu équestre, la gestion quotidienne des écuries, des
            boxes et des soins des chevaux est souvent complexe, stressante et
            chronophage.
          </p>
          <p className="text-xl">
            En échangeant avec des propriétaires d'écuries, des cavaliers
            professionnels, des soigneurs équins et des gérants de centre
            équestres, j'ai réalisé à quel point cette charge mentale pesait
            pour eux.
          </p>
          <p className="text-xl">
            C'est à ce moment-là que Horsplace est né : une solution innovante
            pour simplifier l'organisation des écuries et optimiser le suivi des
            chevaux.
          </p>
          <p className="text-xl">
            Horsplace révolutionne la gestion des infrastructures équestres
            grâce à des technologies numériques durables.
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
      <section className="text-primary-dark p-20 bg-secondary-light mt-1">
        <h3 className="uppercase text-lg font-bold">Horsplace</h3>
        <div className="flex w-3/4 mx-auto">
          <div className="flex flex-col justify-evenly border-r-[1px] border-primary-dark px-10 pb-10">
            <h4 className="font-bold mb-10">FAQ</h4>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <h5>Question?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-evenly px-10 pb-10">
              <div className="h-14"></div>

              <h5>Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <h5>Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <h5>Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <h5>Question?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;
