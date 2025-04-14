import Head from "next/head";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales - Horsplace</title>
        <meta name="description" content="Mentions légales du site Horsplace" />
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            Le site <strong>Horsplace</strong> est édité par :<br />
            <strong>SPARROW DEVELOPPEMENT</strong> <br />
            Adresse : 781 RTE DE CAEN, 14130 PONT L'EVEQUE <br />
            Email : vincent@horsplace.com <br />
            SIRET : 	920 384 617 00014 
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong> <br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA <br />
            Site web :{" "}
            <a
              href="https://vercel.com"
              className="text-blue-500 hover:underline"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Propriété intellectuelle
          </h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos, etc.)
            sont la propriété exclusive de Horsplace, sauf mention contraire.
            Toute reproduction, distribution ou exploitation sans autorisation
            préalable est interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
          <p>
            Les informations collectées via le formulaire de contact sont
            utilisées uniquement pour la communication avec les visiteurs.{" "}
            <br />
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification et de suppression de vos données personnelles. Pour
            toute demande, veuillez nous contacter à l&apos;adresse email
            indiquée ci-dessus.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
          <p>
            Horsplace s&apos;efforce de fournir des informations précises et à
            jour, mais ne saurait être tenu responsable des erreurs ou
            omissions. L&apos;utilisation du site se fait sous la seule
            responsabilité de l&apos;utilisateur.
          </p>
        </section>
      </main>
    </>
  );
}
