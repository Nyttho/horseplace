import checkIcon from "@/public/static/images/check-icon.png";
import Image from "next/image";

export default function Check({ text }) {
  return (
    <li className="flex justify-start items-center gap-5 text-xl">
      <div className="w-12 h-12 flex-shrink-0">
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
