import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Accueil = () => {
  return (
    <div>
     
      <div className="bg-[url('/1.jpg')] w-full bg-cover text-white py-20 text-center p-4 ">
        <h2 className="text-4xl font-bold mb-6">
          Honorez vos proches avec dignité
        </h2>
        <p className="text-lg mb-6">
          Une gestion simple, humaine et respectueuse des cérémonies funéraires
        </p>
        <div className="justify-center flex space-x-6">
        <a
            href="#ceremonies"
            className="bg-white text-blue-700 font-semibold px-3 py-2 rounded hover:bg-gray-200 "
          >
            Voir les cérémonies
          </a>
          <div id="Sabonner" className="py-2"><a
            href="#Sabonner"
            className="bg-white text-blue-700 font-semibold px-3 py-2 rounded hover:bg-gray-200 "
          >
            S'abonner
          </a></div>
        
          </div>
      </div>
      
      <div id="ceremonies" className="py-16 bg-slate-400 m-3">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Cérémonies récentes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg shadow-md p-4 bg-white hover:bg-gray-900 hover:text-white">
              <h4 className="text-xl font-bold mb-2">Cérémonie de M. Jean Dupont</h4>
              <p className="mb-2">10 avril 2025 - Cotonou</p>
              <p className="text-sm ">Une cérémonie remplie d’émotion et de souvenirs inoubliables.</p>
            </div>
            <div className="rounded-lg shadow-md p-4 bg-white hover:bg-gray-900 hover:text-white">
              <h4 className="text-xl font-bold mb-2">Cérémonie de Mme Alice Zinsou</h4>
              <p className="mb-2">5 avril 2025 - Porto-Novo</p>
              <p className="text-sm ">Une commémoration chaleureuse entourée de la famille et des amis.</p>
            </div>
            <div className="rounded-lg shadow-md p-4 bg-white hover:bg-gray-900 hover:text-white">
              <h4 className="text-xl font-bold mb-2">Cérémonie de M. Marc Adékanmi</h4>
              <p className="mb-2">28 mars 2025 - Parakou</p>
              <p className="text-sm ">Un hommage paisible dans un cadre solennel.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Moments marquants</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="/public/9.jpg" alt="Cérémonie émotive" className="w-full h-48 object-cover" />
              <div className="p-4 hover:bg-gray-900 hover:text-white">
                <h4 className="text-xl font-bold mb-2">Un hommage plein de souvenirs</h4>
                <p className="text-sm ">Une cérémonie où les proches ont partagé des moments inoubliables.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="/public/7.jpg" alt="Réunion de famille" className="w-full h-48 object-cover" />
              <div className="p-4 hover:bg-gray-900 hover:text-white">
                <h4 className="text-xl font-bold mb-2">Entouré des siens</h4>
                <p className="text-sm ">Un moment de communion pour honorer la mémoire d’un être cher.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img src="/public/11.jpg" alt="Cérémonie paisible" className="w-full h-48 object-cover" />
              <div className="p-4 hover:bg-gray-900 hover:text-white">
                <h4 className="text-xl font-bold mb-2">Un dernier au revoir</h4>
                <p className="text-sm ">Un adieu serein dans un cadre apaisant et respectueux.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Accueil;