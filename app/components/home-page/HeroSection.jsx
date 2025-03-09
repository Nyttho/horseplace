import Link from "next/link";

export default function HeroSection({ videoUrl, videoTxt }) {
  return (
    <section className="h-screen bg-white">
      <div className="relative w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/webm" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Link
            href="/solution"
            className="py-5 px-8 text-white bg-primary-dark rounded-md text-xl hover:bg-primary-light shadow-lg"
          >
            {videoTxt}
          </Link>
        </div>
      </div>
    </section>
  );
}
