"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/static/images/logo-horsplace.png";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative flex justify-between items-center px-4 lg:px-8 py-5">
      {isMobile && (
        <div className="flex justify-between items-center w-full">
          <div className="relative w-36 h-12">
            <Image src={logo} fill className="object-contain" alt="logo" />
          </div>

          <button
            className="z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col justify-between w-8 h-6">
              <span
                className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      )}

      {/* Version desktop uniquement */}
      {!isMobile && (
        <>
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

          <div className="absolute left-1/2 -translate-x-1/2 w-44 h-16">
            <Image src={logo} fill className="object-contain" alt="logo" />
          </div>

          {/* Bouton devis */}
          <Link href="/contact">
            <div className="border-[3px] p-3 rounded-md border-primary-light hover:text-white hover:bg-primary-light font-bold text-primary-light">
              Demander un devis
            </div>
          </Link>
        </>
      )}

      {/* Menu de Navigation mobile - avec hauteur adaptée et transition fluide */}
      {isMobile && (
        <nav
          className="fixed right-0 top-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out overflow-hidden"
          style={{
            height: isMenuOpen ? "auto" : "0",
            maxHeight: isMenuOpen ? "320px" : "0",
            paddingTop: isMenuOpen ? "80px" : "0",
            paddingBottom: isMenuOpen ? "20px" : "0",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <ul className="flex flex-col gap-6 items-center text-black">
            <NavLink path="/" text="Accueil" onClick={handleLinkClick} />
            <NavLink
              path="/solution"
              text="Solution"
              onClick={handleLinkClick}
            />
            <NavLink path="/tarif" text="Tarif" onClick={handleLinkClick} />
            <NavLink
              path="/a-propos"
              text="À Propos"
              onClick={handleLinkClick}
            />
            <NavLink path="/contact" text="Contact" onClick={handleLinkClick} />

            {/* Bouton de devis intégré dans le menu sur mobile */}
            <li className="mt-4">
              <Link href="/contact" onClick={handleLinkClick}>
                <div className="border-[3px] p-3 rounded-md border-primary-light hover:text-white hover:bg-primary-light font-bold text-primary-light">
                  Demander un devis
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
