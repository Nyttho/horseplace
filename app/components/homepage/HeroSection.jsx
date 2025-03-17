import Link from "next/link";

export default function HeroSection({ heroContent }) {
  return (
    <section className="h-screen  bg-white">
      <div className="relative w-full h-full overflow-hidden">
        {/* video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroContent.videoUrl} type="video/webm" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {/* content over video */}
        <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Link
            href="/solution"
            className="py-5 px-8 text-white bg-primary-dark rounded-md text-xl hover:bg-primary-light shadow-lg"
          >
            {heroContent.btnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
