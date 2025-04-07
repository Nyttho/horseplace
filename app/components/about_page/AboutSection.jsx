import Link from "next/link";

export default function AboutSection({ about }) {
  return (
    <section className=" py-16 px-5 lg:px-20 text-primary-dark ">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
        <h2 className="text-center text-2xl lg:text-6xl font-extrabold text-black">
          {about.title}
        </h2>
        <p className="text-xl text-center md:text-left">{about.text}</p>
        <p className="text-xl text-center md:text-left">{about.text2}</p>
        <p className="text-xl text-center md:text-left">{about.text3}</p>
        <p className="text-xl text-center md:text-left">{about.text4}</p>
        <p className="text-xl text-center md:text-left">{about.text5}</p>

        <Link href="/devis">
          <div className="bg-primary-dark text-white mt-10 py-1 rounded-md text-center w-52  px-10 mx-auto">
            Demander un devis
          </div>
        </Link>
      </div>
    </section>
  );
}
