import logo from "@/public/logo.svg";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "../UI/Icons";
import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/solution", label: "Solution" },
    { href: "/tarif", label: "Tarifs" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/contact", label: "Contact" },
    { href: "/devis", label: "Demander un devis" },
  ];

  return (
    <footer className="mt-20 lg:px-6 text-primary-dark font-bold mx-10 lg:mx-0">
      {/* Logo centré au-dessus */}
      <div className="w-32 h-12 sm:w-40 sm:h-14 md:w-44 md:h-16 mx-auto">
        <Image src={logo} width={176} height={64} alt="logo" />
      </div>

      {/* Navigation en colonne sur mobile/tablette, en ligne sur desktop */}
      <nav className="flex flex-col lg:flex-row lg:justify-between max-w-5xl mx-auto text-center lg:text-left mt-6">
        <ul className="flex flex-col items-center justify-start lg:flex-row lg:gap-8 w-full">
          {links.map((link) => (
            <Link
              href={link.href}
              className="w-full py-2 mt-2 border-b lg:border-none lg:text-center border-primary-dark text-left"
              key={link.label}
            >
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Réseaux sociaux */}
      <div className="flex justify-center items-center gap-6 sm:gap-4 md:gap-8 my-6">
        <a href="#" target="_blank">
          <Instagram />
        </a>
        <a href="#" target="_blank">
          <Linkedin />
        </a>
        <a href="#" target="_blank">
          <Facebook />
        </a>
      </div>

      {/* Séparateur avant copyright */}
      <hr className="border-primary-dark w-full lg:w-3/4 mx-auto my-6" />

      {/* Copyright */}
      <div className="mx-auto flex flex-col items-center gap-2 text-center">
        <Link
          href="/mentions-legales"
          className="text-gray-400 text-sm font-normal hover:text-primary-dark transition-colors duration-300"
        >
          Mentions légales
        </Link>
        <p className="text-center text-sm">
          &copy; 2025 Horsplace. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
