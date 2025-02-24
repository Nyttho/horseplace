import logo from "@/public/logo.svg";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "../UI/Icons";
import Link from "next/link";

export default function Footer() {
  return (
<footer className="mt-20 px-6">
  {/* Navigation principale */}
  <nav className="relative w-full max-w-5xl mx-auto flex flex-wrap justify-between items-center text-primary-dark font-bold gap-4">
    
    {/* Liens de gauche */}
    <ul className="flex gap-6 sm:gap-4 md:gap-8 flex-wrap justify-center md:justify-start">
      <Link href="/"><li>Accueil</li></Link>
      <Link href="/solution"><li>Solution</li></Link>
      <Link href="/tarif"><li>Tarifs</li></Link>
    </ul>

    {/* Logo centré */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-12 sm:w-40 sm:h-14 md:w-44 md:h-16">
      <Image src={logo} width={176} height={64} alt="logo" />
    </div>

    {/* Liens de droite */}
    <ul className="flex gap-6 sm:gap-4 md:gap-8 flex-wrap justify-center md:justify-end">
      <Link href="/a-propos"><li>À Propos</li></Link>
      <Link href="/contact"><li>Contact</li></Link>
      <Link href="/devis"><li>Demander un devis</li></Link>
    </ul>
  </nav>

  {/* Séparateur */}
  <hr className="border-primary-dark w-3/4 mx-auto my-10" />

  {/* Réseaux sociaux */}
  <div className="text-primary-dark flex justify-center items-center gap-6 sm:gap-4 md:gap-8 my-10">
    <a href="#" target="_blank"><Instagram /></a>
    <a href="#" target="_blank"><Linkedin /></a>
    <a href="#" target="_blank"><Facebook /></a>
  </div>

  {/* Copyright */}
  <p className="text-primary-dark text-center text-sm">
    &copy; 2025 Horsplace. Tous droits réservés.
  </p>
</footer>

  
  );
}
