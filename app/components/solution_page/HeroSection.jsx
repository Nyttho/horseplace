import Image from "next/image";
import Link from "next/link";
import IllustrationHorse2 from "@/public/static/images/illustration_horse_2.jpg";

export default async function HeroSection({ heroContent }) {
  const titleArray = heroContent.title.split(" ");
  const emphasis = titleArray[1];
  const underline = titleArray[titleArray.length - 1];
  const illustration = IllustrationHorse2.src;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}
/api/video-animation?populate=*`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const data = await response.json();
    const videoUrl = data.data.videoUrl;
    return (
      <section className="h-[650px] lg:h-screen relative mb-20">
        <div className="relative w-full h-full">
          {/* Image en fond */}
          <div className="absolute inset-0 z-0">
            <Image
              src={illustration}
              alt="cheval au galop"
              fill={true}
              className="object-cover object-top"
            />
          </div>
          {/* Couche sombre par-dessus l'image */}
          <div className="absolute inset-0 bg-gray-800/25 z-10"></div>
          {/* Contenu principal */}
          <div className="text-white w-full absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
            <h2 className="text-3xl lg:text-5xl text-center font-bold">
              {titleArray[0]}{" "}
              <span className="lg:bg-primary-dark lg:px-1">{emphasis}</span>{" "}
              {titleArray.slice(2, -1).join(" ")}{" "}
              <span className="underline">{underline}</span>
            </h2>
            <p className="text-lg text-center w-3/4 mt-12">
              {heroContent.subtitle}
            </p>
            <Link href="/tarif">
              <div className="bg-primary-dark text-white rounded-md mt-10 text-center w-60 py-5 font-bold">
                En savoir plus
              </div>
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-30 flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] max-w-4xl h-auto object-cover translate-y-20 rounded-md overflow-hidden border-2 border-primary-dark shadow-lg"
            >
              <source src={videoUrl} type="video/webm" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error(err.message);
  }
}
