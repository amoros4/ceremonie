import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Accueil from "./Components/Accueil";
import Apropos from "./Components/Apropos";
import Cérémonies from "./Components/Cérémonies";
import  Contact  from "./Components/Contact";
import  Sabonner  from "./Components/Sabonner";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/cérémonies" element={<Cérémonies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sabonner" element={<Sabonner />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
