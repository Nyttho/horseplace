import Image from "next/image";
export default async function TrustSection({ trustContent }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/clients?populate=*`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const data = await response.json();
    const clients = data.data;

    console.log(clients);

    return (
      <section className="py-10 ">
        <div className="mb-10">
          <p className="text-black text-2xl font-bold text-center">
            {trustContent.catchPhrase}
          </p>
        </div>
        <div className="mt-3">
          <ul className="flex gap-5 justify-center items-center">
            {clients.map((client) => (
              <li
                className="w-16 h-16 rounded-full bg-primary-dark flex justify-center items-center"
                key={client.id}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${client.logo.formats.thumbnail.url}`}
                  width={500}
                  height={500}
                  alt={client.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  } catch (err) {
    console.error("Erreur lors de la récupération des données", err);
    return (
      <div>
        <h1>Erreur lors du chargement des données</h1>
      </div>
    );
  }
}
