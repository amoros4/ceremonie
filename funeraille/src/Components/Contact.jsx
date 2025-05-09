import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="w-full px-4 py-20 bg-slate-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
        
        {/* Formulaire */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Objet (optionnel)"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Coordonnées + Carte */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>
            <p className="mb-2">📍 Cotonou, Bénin</p>
            <p className="mb-2">📞 +229 01 66 88 94 43</p>
            <p className="mb-2">✉️ contact@funerailles.bj</p>
          </div>

          {/* Google Map */}
          <div className="w-full h-64">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.703695324969!2d2.426973115354167!3d6.370292195398581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a93c41e1f5d3%3A0xb5c5e7b3a5c2d798!2sCotonou!5e0!3m2!1sfr!2sbj!4v1616161616161"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;