import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 pt-3 text-white p-4 fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">SoulPath</Link>
        </div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">
            Accueil
          </Link>
          <Link to="/apropos" className="hover:text-gray-300">
            À propos
          </Link>
          <Link to="/cérémonies" className="hover:text-gray-300">
            Cérémonies
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link to="/Sabonner" className="bg-blue-500 border-10 px-3 py-2 font-semibold hover:text-gray-300">
            S'abonner
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
