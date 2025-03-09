export default function TrustSection() {
  return (
    <section className="py-10">
      <div className="mb-10">
        <p className="text-black text-2xl font-bold text-center">
          Ils nous font confiance
        </p>
      </div>
      <div className="mt-3">
        <ul className="flex gap-5 justify-center items-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <li
              key={index}
              className="w-16 h-16 rounded-full bg-primary-dark"
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
