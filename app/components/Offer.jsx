import Link from "next/link";

import ScreenSize from "./price_page/ScreenSize";

export default function Offer({ offer }) {
  return (
    <div className="w-72 flex flex-col items-center justify-around border-[2px] border-primary-dark p-8 rounded-sm">
      <ScreenSize offer={offer} />
      <div className="text-primary-dark mb-10 text-center flex-grow">
        <h3 className="text-lg font-bold mb-6 md:md-0">{offer.title}</h3>
        <h4>{offer.price}€</h4>
      </div>
      <div>
        <ul className="space-y-4 text-black/50 text-center">
          {offer.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-16">
        <Link href="#">
          <div className="border-[1px] border-primary-dark py-2 w-40 text-primary-dark rounded-lg text-center">
            Demander un devis
          </div>
        </Link>
      </div>
    </div>
  );
}
