import Image from "next/image";
import avatar from "@/public/static/images/avatar.jpeg";

export default function QuoteSection() {
  return (
    <section className="flex flex-col p-10 bg-primary-light justify-center items-center text-white">
      <div className="text-center">
        <q className="text-2xl">
          Dans le milieu équestre, la gestion quotidienne des boxes et des soins
          des chevaux est <br /> souvent complexe, stressante et chronophage.
        </q>
        <div className="flex flex-col justify-center items-center">
          <div className="w-32 h-32 bg-primary-dark rounded-full my-5 overflow-hidden">
            <Image
              src={avatar}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <p>
            <span className="font-bold text-[#e5e5e5]">Vincent BRAY</span>,
            Fondateur de Horsplace
          </p>
        </div>
      </div>
    </section>
  );
}
