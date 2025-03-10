import Estimation from "../components/Estimation";
import Link from "next/link";
import Image from "next/image";
import horsePicto from "@/public/static/images/horse-picto.png";
import heartPicto from "@/public/static/images/heart-picto.png";
import instructionPicto from "@/public/static/images/instructions-picto.png";
import headPicto from "@/public/static/images/head-picto.png";
const Solution = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="flex-1 flex flex-col justify-between items-start w-1/2 ml-40 my-28">
            <h3 className="font-bold text-2xl">Qu'est ce que Horsplace ?</h3>
            <p className="w-3/4 text-primary-dark text-lg leading-8">
              Horsplace est la solution conçue pour simplifier la gestion
              quotidienne des écuries en affichant directement sur un écran dans
              chaque box, toutes les informations essentielles sur le cheval.
            </p>
            <Link href="/a-propos" className="border-[1px] border-primary-dark text-primary-dark w-48 text-center p-2 text-md rounded-md">En savoir plus sur Horsplace</Link>
          </div>
          <div className="bg-primary-dark p-14 w-full rounded-l-2xl flex-1">
            <ul className="text-white flex flex-col content-between w-full gap-5">
              <li className="flex gap-6 items-center max-w-2xl">
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={horsePicto}
                    width={96}
                    height={96}
                    alt=""
                    className="object-contain object-center"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">
                    Suivi des caractéristiques du cheval :
                  </h4>
                  <p>
                    Nom, âge, alimentation spécifique, comportements à
                    surveiller... Tout est visible en un coup d'œil.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-center max-w-2xl">
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={heartPicto}
                    width={96}
                    height={96}
                    alt=""
                    className="object-contain object-center"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">
                    Affichage des soins et traitements :
                  </h4>
                  <p>
                    Traitements en cours, prochaine visite du vétérinaire,
                    période de repos...Le planning est toujours à jour, sans
                    erreur.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-center max-w-2xl">
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={instructionPicto}
                    width={96}
                    height={96}
                    alt=""
                    className="object-contain object-center"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">
                    Instructions personnalisées pour chaque pensionnaire :
                  </h4>
                  <p>
                    Consignes précises pour le palefrenier, informations pour
                    l'équipe de soin ou les propriétaires.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-center max-w-2xl">
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={headPicto}
                    width={96}
                    height={96}
                    alt=""
                    className="object-contain object-center"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xl">
                    Fini les oublis et les confusions :
                  </h4>
                  <p>
                    Tout le monde accède aux informations au bon moment,
                    directement sur place.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <Estimation />
      </section>
    </>
  );
};

export default Solution;
