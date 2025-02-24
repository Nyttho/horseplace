import Link from "next/link";
import Image from "next/image";

export default function Offer({ offer }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center border-[1px] border-primary-dark py-8 rounded-sm">
      <div className="w-16 h-16 bg-primary-dark rounded-full my-5 overflow-hidden">
        <Image src={offer.img} alt={offer.title} width={500} height={500} />
      </div>
      <div className="text-primary-dark mb-10 text-center">
        <h3 className="text-lg font-bold">{offer.title}</h3>
        <h4>{offer.subtitle}</h4>
      </div>
      <div>
        <ul className="space-y-4 text-black/50">
          <li>{offer.feature1}</li>
          <li>{offer.feature2}</li>
          <li>{offer.feature3}</li>
        </ul>
      </div>
      <div className="mt-16">
        <Link href="#">
          <div className="border-[1px] border-primary-dark py-2 w-40 text-primary-dark rounded-md text-center">Start Now</div>
        </Link>
      </div>
    </div>
  );
}
