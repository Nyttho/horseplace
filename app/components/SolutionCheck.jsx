import checkIcon from "@/public/static/images/check-icon.png";
import Image from "next/image";

export default function SolutionCheck({ text }) {
  return (
    <li className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-5 text-xl">
      <div className="w-10 h-10 flex-shrink-0">
        <Image
          src={checkIcon}
          width={96}
          height={96}
          alt=""
          className="object-contain object-center select-none"
          draggable="false"
        />
      </div>
      {text}
    </li>
  );
}
