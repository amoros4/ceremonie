import React from "react";

const Sabonner = () => {
  return (
    <div className="bg-slate-400 py-16 px-4 m-6 ">
      <div className="max-w-3xl mx-auto m-10 bg-white shadow-xl rounded-3xl p-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Abonnez-vous</h2>
        <p className="text-gray-600 mb-8">Restez informé des nouvelles et des mises à jour en vous abonnant à notre platforme.</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input type="email" placeholder="Entrez votre email" className="w-full md:flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition duration-300" />
          <button className="bg-black text-white rounded-full px-8 py-3 font-semibold hover:bg-gray-800 transition-all duration-300">S'abonner</button>
        </div>
      </div>
    </div>
  );
};

export default Sabonner;
