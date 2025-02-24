import logo from "@/public/logo.svg";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "../UI/Icons";

export default function Footer() {
  return (
    <footer className="mt-20">
      <nav className="w-2/3 mx-auto">
        <ul className="flex justify-around items-center  text-primary-dark font-bold">
          <li>Accueil</li>
          <li>Solution</li>
          <li>Tarifs</li>
          <div className="w-44 h-16">
            <Image src={logo} width={176} height={64} alt="logo" />
          </div>
          <li>À Propos</li>
          <li>Contact</li>
          <li>Demander un devis</li>
        </ul>
      </nav>
      <hr className="border-primary-dark w-3/4 mx-auto my-10" />
      <div className="text-primary-dark flex justify-center items-center gap-6 my-20">
        <a href="#" target="_blank"><Linkedin /></a>
        <a href="#" target="_blank"><Facebook /></a>
        <a href="#" target="_blank"><Instagram /></a>
        
        
        
      </div>
      <p className="text-primary-dark text-center text-sm">&copy; 2025 Horsplace. Tous droits réservés.</p>
   
    </footer>
  );
}
