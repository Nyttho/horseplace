export default async function QuestionsSection() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/faq-lists?populate=*`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    const questions = data.data;

    // Diviser les questions en 2 groupes de 4
    const firstColumnQuestions = questions.slice(0, 4);
    const secondColumnQuestions = questions.slice(4, 8);

    return (
      <section className="text-primary-dark p-20 mt-1">
        <h3 className="uppercase text-5xl font-bold text-black text-center mb-20">
          FAQ
        </h3>
        <div className="flex w-3/4 mx-auto">
          {/* Première colonne de questions */}
          <div className="flex flex-col justify-evenly border-r-[1px] border-primary-dark px-10 pb-10 space-y-5">
            {firstColumnQuestions.map((question) => (
              <div key={question.id}>
                <h5 className="font-bold">{question.question}</h5>
                <p>{question.response}</p>
              </div>
            ))}
          </div>

          {/* Séparation entre les colonnes */}
          <div className="border-l-[1px] border-black"></div>

          {/* Deuxième colonne de questions */}
          <div className="flex flex-col space-y-5 px-10 pb-10">
            {secondColumnQuestions.map((question) => (
              <div key={question.id}>
                <h5 className="font-bold">{question.question}</h5>
                <p>{question.response}</p>
              </div>
            ))}
          </div>
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
