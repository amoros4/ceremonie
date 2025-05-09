const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware pour analyser le JSON
app.use(express.json());
app.use(cors());

// Import des routes
const ceremoniesRoute = require('./routes/cérémoniesRoute');
const contactsRoute = require('./routes/contactRoute');

// Utilisation des routes avec des préfixes spécifiques
app.use('/api/cérémonies', ceremoniesRoute);
app.use('/api/contacts', contactsRoute);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(" Connexion à MongoDB réussie"))
    .catch((error) => console.error(" Erreur de connexion à MongoDB", error));

// Route de base
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json({ message: " Bienvenue sur l'API de gestion des funérailles" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Mon serveur est actif à l'adresse http://localhost:${PORT}`);
});