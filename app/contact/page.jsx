import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="bg-secondary-light py-10 px-5 md:px-20 ">
        <h2 className="text-6xl text-black text-center my-10">
          Nous contacter
        </h2>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
