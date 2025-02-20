import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center px-8 py-5">
      {/* Menu gauche */}
      <nav className="flex-grow">
        <ul className="flex gap-5 items-center text-black">
          <li className="hover:text-primary-light">
            <Link href="/">Accueil</Link>
          </li>
          <li className="hover:text-primary-light">
            <Link href="/solution">Solution</Link>
          </li>
          <li className="hover:text-primary-light">
            <Link href="/tarif">Tarif</Link>
          </li>
          <li className="hover:text-primary-light">
            <Link href="/a-propos">À Propos</Link>
          </li>
          <li className="hover:text-primary-light">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Logo Centré Absolument */}
      <div className="absolute left-1/2 -translate-x-1/2 w-44 h-16">
        <Image src={logo} fill className="object-contain" alt="logo" />
      </div>

      {/* Bouton devis */}
      <div className="border-[3px] p-3 rounded-md border-primary-light hover:text-primary-light font-bold text-primary-light">
        <Link href="/devis">Demander un devis</Link>
      </div>
    </div>
  );
};

export default Navbar;
