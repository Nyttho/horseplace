import Image from "next/image";

export default function QuoteSection({ testimonial, avatar }) {
  return (
    <section className="flex flex-col p-10 bg-primary-light justify-center items-center text-white">
      <div className="text-center">
        <q className="text-2xl">{testimonial.quote}</q>
        <div className="flex flex-col justify-center items-center">
          <div className="w-32 h-32 bg-primary-dark rounded-full my-5 overflow-hidden">
            <Image
              src={testimonial.authorImg}
              width={500}
              height={500}
              alt={testimonial.authorName}
            />
          </div>
          <p>
            <span className="font-bold text-[#e5e5e5]">
              {testimonial.authorName}
            </span>
            , {testimonial.authorTitle}
          </p>
        </div>
      </div>
    </section>
  );
}
