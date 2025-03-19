import Link from "next/link";

export default function AboutSection({ about }) {
  return (
    <section className="bg-secondary-light min-h-screen py-16 px-20 text-primary-dark ">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
        <h2 className="text-center text-6xl font-extrabold">{about.title}</h2>
        <p className="text-xl">{about.text}</p>
        <p className="text-xl">{about.text2}</p>
        <p className="text-xl">{about.text3}</p>
        <p className="text-xl">{about.text4}</p>
        <p className="text-xl">{about.text5}</p>

        <Link href="/devis">
          <div className="bg-primary-dark text-white mt-10 py-1 rounded-md text-center w-52  px-10 mx-auto">
            Demander un devis
          </div>
        </Link>
      </div>
    </section>
  );
}
