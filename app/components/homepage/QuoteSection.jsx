import Image from "next/image";
import avatar from "@/public/static/images/avatar.png";

export default function QuoteSection({ testimonialContent }) {
  const authorImageUrl = testimonialContent.authorImg?.formats?.thumbnail?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${testimonialContent.authorImg.formats.thumbnail.url}`
    : testimonialContent.authorImg?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${testimonialContent.authorImg.url}`
    : avatar.src;

  if (testimonialContent.authorImg?.formats?.thumbnail?.url) {
    console.log(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${testimonialContent.authorImg.formats.thumbnail.url}`
    );
  }

  return (
    <section className="flex flex-col p-5 lg:p-10 bg-primary-light justify-center items-center text-white">
      <div className="text-center w-2/3">
        <q className="text-2xl">{testimonialContent.quote}</q>
        <div className="flex flex-col justify-center items-center">
          <div className="w-32 h-32 bg-primary-dark rounded-full my-5 overflow-hidden">
            <Image
              src={authorImageUrl}
              width={500}
              height={500}
              alt={`Photo de ${testimonialContent.authorName || "l'auteur"}`}
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
