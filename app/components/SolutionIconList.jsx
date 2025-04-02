import Image from "next/image";

export default function SolutionIconList({ icon, label, text }) {
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
