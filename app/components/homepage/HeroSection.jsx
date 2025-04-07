import Link from "next/link";

export default function HeroSection({ heroContent }) {
  return (
    <section className="bg-white">
      {/* Bloc vidéo plein écran */}
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroContent.videoUrl} type="video/webm" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {/* Bouton positionné par-dessus la vidéo */}
        <div className="absolute bottom-8 md:bottom-16 lg:bottom-48 left-1/2 transform -translate-x-1/2 flex justify-center">
          <Link
            href="/solution"
            className="py-3 md:py-4 lg:py-5 px-6 md:px-7 lg:px-8 text-white bg-primary-dark rounded-md text-base md:text-lg lg:text-xl text-center hover:bg-primary-light shadow-lg"
          >
            {heroContent.btnText}
          </Link>
        </div>
      </div>

      {/* Titre sous la vidéo */}
      <div className="px-4 py-12 bg-white">
        <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-snug">
          De l'ardoise aux écrans connectés : <br />
          révolutionnez la gestion de votre écurie
        </h1>
      </div>
    </section>
  );
}
