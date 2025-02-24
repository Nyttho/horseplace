export default function({title, percent, text}){
    return (
        <div className=" bg-white text-primary-dark px-10 pt-10 row-span-4  border-[1px] border-primary-dark">
        <p className="text-sm uppercase font-bold">{title}</p>
        <p className="mt-8">
          <span className="text-6xl text-black font-bold">{percent}%</span> {text}
        </p>
      </div>
    )
}