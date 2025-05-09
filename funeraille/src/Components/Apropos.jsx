import React from "react";


const Apropos = () => {
  return (
    <div className="min-h-screen  w-full bg-cover px-4 py-20">
      
      <div className=" mx-auto min-h-11 bg-[url('/1.jpg')] w-full bg-cover text-white py-20 text-center  ">
        <h1 className="text-5xl font-bold text-black mb-10 drop-shadow-lg">À propos de nous</h1>
        <p className="text-xl text-gray-800 mb-12 leading-relaxed">
          Nous sommes une plateforme dédiée à la <strong>gestion complète des funérailles</strong>, avec pour mission de faciliter l’organisation, le suivi et la communication autour des cérémonies.
        </p>
         </div>

        <div className="gap-10 grid md:grid-cols-2 bg-slate-400 p-3 m-4">
          <div className="container mx-auto flex items-center space-x-6 rounded-3xl shadow-xl px-10 py-8 bg-white text-black m-4 hover:shadow-2xl transition-all duration-300">
            <img src="/public/13.jpg" alt="Organisation des cérémonies" className="w-64 h-64 object-cover rounded-2xl" />
            <p className="text-left">
              <strong className="text-2xl font-bold">Organisation des cérémonies :</strong> Créez, planifiez et communiquez chaque étape de la cérémonie en toute simplicité.
            </p>
          </div>

          <div className="container mx-auto flex items-center space-x-6 rounded-3xl shadow-xl px-10 py-8 bg-white text-black m-4 hover:shadow-2xl transition-all duration-300">
            <img src="/public/14.jpg" alt="Restauration professionnelle" className="w-64 h-64 object-cover rounded-2xl" />
            <p className="text-left">
              <strong className="text-2xl font-bold">Restauration professionnelle :</strong> Offrez un service traiteur de qualité, pour les proches, invités et familles.
            </p>
          </div>

          <div className="container mx-auto flex items-center space-x-6 rounded-3xl shadow-xl px-10 py-8 bg-white text-black m-4 hover:shadow-2xl transition-all duration-300">
            <img src="/public/15.jpg" alt="Location de véhicules" className="w-64 h-64 object-cover rounded-2xl" />
            <p className="text-left">
              <strong className="text-2xl font-bold">Location de véhicules haut de gamme :</strong> Berlines, minibus, corbillards, choisissez des options élégantes pour une cérémonie digne.
            </p>
          </div>

          <div className="container mx-auto flex items-center space-x-6 rounded-3xl shadow-xl px-10 py-8 bg-white text-black m-4 hover:shadow-2xl transition-all duration-300">
            <img src="/public/16.jpg" alt="Suivi numérique" className="w-64 h-64 object-cover rounded-2xl" />
            <p className="text-left">
              <strong className="text-2xl font-bold">Suivi numérique des cérémonies :</strong> Archive automatique, filtres par date, lieux, type, et possibilité de restaurer les données.
            </p>
          </div>

          <div className="container mx-auto flex ml-80 items-center  space-x-6 rounded-3xl shadow-xl px-10 py-8 bg-white text-black m-4 hover:shadow-2xl transition-all duration-300">
            <img src="/public/17.jpg" alt="Assistance et écoute" className="w-64 h-64 object-cover rounded-2xl" />
            <p className="text-left">
              <strong className="text-2xl font-bold">Assistance et écoute :</strong> Notre équipe reste à l’écoute de vos besoins pour vous accompagner à chaque étape.
            </p>
          </div>
        </div>
        
          <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Nos différents services</h2>
          </div>
          <div className=" flex flex-wrap px-6    gap-3 ">
          <img src="/public/8.jpg" alt="" className="w-1/3" />
          <img src="/public/5.jpg" alt="" className="w-1/3"  />
          <img src="/public/11.jpg" alt="" className="w-1/3"  />
          
          <img src="/public/20.jpg" alt="" className="w-1/3"  />
          
          
          <img src="/public/18.jpg" alt="" className="w-1/3" />
          <img src="/public/14.jpg" alt="" className="w-1/3" />
          <img src="/public/12.jpg" alt="" className="w-1/3" />
          

        </div>

        <div className="py-16 ">
          <p className="text-xl items-center text-gray-800 leading-relaxed font-bold">
            Nous croyons que chaque hommage mérite une attention particulière. Notre plateforme est là pour rendre cela possible, avec respect, simplicité et dignité.
          </p>
        </div>
      
      
    </div>
  );
};

export default Apropos;
