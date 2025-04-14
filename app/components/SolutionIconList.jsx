import Image from "next/image";
import HorsePicto from "@/public/static/images/horse-picto.png";
import HeartPicto from "@/public/static/images/heart-picto.png";
import InstructionPicto from "@/public/static/images/instructions-picto.png";
import HeadPicto from "@/public/static/images/head-picto.png";

export default function SolutionIconList({ label, text }) {
  const getIcon = (label) => {
    if (label.startsWith("Suivi")) {
      return HorsePicto.src;
    } else if (label.startsWith("Affichage")) {
      return HeartPicto.src;
    } else if (label.startsWith("Instruction")) {
      return InstructionPicto.src;
    } else if (label.startsWith("Fini")) {
      return HeadPicto.src;
    } else {
      return HorsePicto.src; // Default icon if no match
    }
  };
  const icon = getIcon(label);
  return (
    <li className="flex gap-6 items-center max-w-2xl flex-col xl:flex-row  justify-center">
      <div className="w-20 h-20 flex-shrink-0 flex ">
        <Image
          src={icon}
          width={96}
          height={96}
          alt={label}
          className="object-contain object-center select-none"
          draggable="false"
        />
      </div>
      <div className="text-center xl:text-left">
        <h4 className="font-bold text-xl">{label} :</h4>
        <p>{text}</p>
      </div>
    </li>
  );
}
