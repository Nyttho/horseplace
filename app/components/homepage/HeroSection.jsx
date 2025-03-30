import Link from "next/link";

export default function HeroSection({ heroContent }) {
  return (
    <section className="h-auto lg:h-screen bg-white relative">
      <div className="relative w-full h-full overflow-hidden">
        {/* Video avec hauteur augmentée pour mobile/tablette */}
        <div className="h-[60vh] md:h-[70vh] lg:h-full">
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
        </div>

        {/* Content over video - position adaptée */}
        <div className="absolute bottom-8 md:bottom-16 lg:bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Link
            href="/solution"
            className="py-3 md:py-4 lg:py-5 px-6 md:px-7 lg:px-8 text-white bg-primary-dark rounded-md text-base md:text-lg lg:text-xl text-center hover:bg-primary-light shadow-lg"
          >
            {heroContent.btnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
