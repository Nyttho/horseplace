export default function ({ title, percent, text }) {
  return (
    <div className="bg-white text-primary-dark text-xl px-10 pt-5 row-span-4 border-[1px] border-primary-dark flex flex-col">
      <p className="text-3xl uppercase font-bold text-black mb-16">{title}</p>
      <p className="">
        <span className="text-4xl text-white bg-primary-dark px-3 font-bold align-baseline relative bottom-2 mb-3">
          {percent}%
        </span>{" "}
        {text}
      </p>
    </div>
  );
}
