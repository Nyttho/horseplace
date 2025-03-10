import Image from "next/image";

export default function SolutionIconList({ icon, label, text }) {
  return (
    <li className="flex gap-6 items-center max-w-2xl">
      <div className="w-20 h-20 flex-shrink-0">
        <Image
          src={icon}
          width={96}
          height={96}
          alt=""
          className="object-contain object-center select-none"
          draggable="false"
        />
      </div>
      <div>
        <h4 className="font-bold text-xl">{label} :</h4>
        <p>{text}</p>
      </div>
    </li>
  );
}
