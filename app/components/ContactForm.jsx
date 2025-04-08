"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false); // <- RGPD checkbox
  const [isLoading, setIsLoading] = useState(false);
  const [feedBack, setFeedBack] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consent) {
      setFeedBack({
        message: "Vous devez accepter les conditions pour envoyer le message.",
        type: "error",
      });
      return;
    }

    setIsLoading(true);

    try {
      const formData = { email, phone, message };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        }
      );

      if (!response.ok) throw new Error("Erreur lors de l'envoi");

      setFeedBack({
        message: "Message envoyé avec succès !",
        type: "success",
      });
      setEmail("");
      setPhone("");
      setMessage("");
      setConsent(false); // reset checkbox
    } catch (error) {
      setFeedBack({
        message: "Échec de l'envoi du message.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (feedBack) {
      const timer = setTimeout(() => setFeedBack(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [feedBack]);

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full md:w-3/4 flex flex-col gap-5">
      {feedBack && (
        <div
          className={`p-3 text-center rounded-md text-white ${
            feedBack.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {feedBack.message}
        </div>
      )}

      <input
        className="w-full md:w-2/5 p-5 border-[1px] border-primary-dark rounded-md mx-auto outline-none"
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />

      <input
        className="w-full md:w-2/5 p-5 border-[1px] border-primary-dark rounded-md mx-auto outline-none"
        type="text"
        name="phone"
        placeholder="Téléphone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        required
      />

      <textarea
        className="p-5 border-[1px] border-primary-dark outline-none rounded-md resize-none"
        placeholder="Votre demande"
        name="message"
        rows={10}
        cols={100}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        required
      ></textarea>

      {/* ✅ RGPD Consent Checkbox */}
      <div className="flex items-center gap-2 mx-auto w-full md:w-2/5">
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="w-5 h-5"
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          J’accepte que mes données soient utilisées pour être recontacté.
        </label>
      </div>

      <button
        className="bg-primary-dark text-white rounded-md text-center w-4/5 md:w-2/5 py-5 mx-auto mt-5 disabled:opacity-50"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}
