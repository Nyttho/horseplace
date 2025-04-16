import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  // weight: ["400", "700", "900"],
  // variable: "--font-outfit",
});

export const metadata = {
  title: "Horsplace - Intelligent stable manager",
  description:
    "Optimisez la gestion de vos écuries avec HorsPlace : un écran e-ink innovant pour afficher soins, rations et infos en temps réel sur chaque box.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}  antialiased font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
