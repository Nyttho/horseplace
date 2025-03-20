"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScreenSize({ offer }) {
  const [dynamicClass, setDynamicClass] = useState("");
  const [logoSize, setLogoSize] = useState(12);

  useEffect(() => {
    if (offer.size === "medium") {
      setDynamicClass("w-14 h-10");
      setLogoSize(12);
    } else {
      setDynamicClass("w-20 h-14");
      setLogoSize(16);
    }
  }, [offer.size]); // On met à jour l'état lorsque l'offer.size change

  return (
    <div
      className={`${dynamicClass} my-5 overflow-hidden border-[3px] border-black flex justify-center items-center rounded-sm`}
    >
      <Image
        src={offer.img}
        alt={offer.title}
        width={logoSize}
        height={logoSize}
      />
    </div>
  );
}
