"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedBack, setFeedBack] = useState(null); // { message: "...", type: "success" | "error" }

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      setFeedBack({
        message: "Échec de l'envoi du message.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Disparition du feedback après 5 secondes
  useEffect(() => {
    if (feedBack) {
      const timer = setTimeout(() => setFeedBack(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [feedBack]);

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-3/4 flex flex-col gap-5">
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
        className="w-2/5 p-5 border-[1px] border-primary-dark rounded-md mx-auto outline-none"
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />

      <input
        className="w-2/5 p-5 border-[1px] border-primary-dark rounded-md mx-auto outline-none"
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

      <button
        className="bg-primary-dark text-white rounded-md text-center w-2/5 py-5 mx-auto mt-5 disabled:opacity-50"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}
