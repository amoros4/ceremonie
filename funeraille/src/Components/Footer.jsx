import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">SoulPath</h3>
          <p>Honorer la mémoire de vos proches avec dignité et respect.</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
          <ul>
            <li><a href="/" className="text-gray-400 hover:text-white">Accueil</a></li>
            <li><a href="/Apropos" className="text-gray-400 hover:text-white">Apropos</a></li>
            <li><a href="/cérémonies" className="text-gray-400 hover:text-white">Cérémonies</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="/sabonner" className="text-gray-400 hover:text-white">S'abonner</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">Adresse : Cotonou, Bénin</p>
          <p className="text-gray-400">Téléphone : +229 0166889443</p>
          <p className="text-gray-400">Email : contact@soulpath.com</p>
        </div>
      </div>
      <div className="text-center text-gray-500 border-t border-gray-700 mt-6 pt-4">
        &copy; {new Date().getFullYear()} SoulPath. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
