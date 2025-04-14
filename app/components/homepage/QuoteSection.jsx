import Image from "next/image";

export default function QuoteSection({ testimonialContent }) {
  console.log(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}${testimonialContent.authorImg.formats.thumbnail.url}`
  );
  return (
    <section className="flex flex-col p-5 lg:p-10 bg-primary-light justify-center items-center text-white">
      <div className="text-center w-2/3">
        <q className="text-2xl">{testimonialContent.quote}</q>
        <div className="flex flex-col justify-center items-center">
          <div className="w-32 h-32 bg-primary-dark rounded-full my-5 overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${testimonialContent.authorImg.formats.thumbnail.url}`}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <p>
            <span className="font-bold text-[#e5e5e5]">
              {testimonialContent.authorName}
            </span>
            ,{testimonialContent.authorTitle}
          </p>
        </div>
      </div>
    </section>
  );
}
