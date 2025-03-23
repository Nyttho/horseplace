import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center px-8 py-5">
      {/* Menu gauche */}
      <nav className="flex-grow">
        <ul className="flex gap-5 items-center text-black">
          <NavLink path="/" text="Accueil" />
          <NavLink path="/solution" text="Solution" />
          <NavLink path="/tarif" text="Tarif" />
          <NavLink path="/a-propos" text="À Propos" />
          <NavLink path="/contact" text="Contact" />
        </ul>
      </nav>

      {/* Logo Centré Absolument */}
      <div className="absolute left-1/2 -translate-x-1/2 w-44 h-16">
        <Image src={logo} fill className="object-contain" alt="logo" />
      </div>

      {/* Bouton devis */}

      <Link href="/contact">
        <div className="border-[3px] p-3 rounded-md border-primary-light hover:text-white hover:bg-primary-light font-bold text-primary-light">
          Demander un devis
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
