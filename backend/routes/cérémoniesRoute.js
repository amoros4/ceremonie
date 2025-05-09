const express = require('express');
const router = express.Router();

// Import du modèle de cérémonie (si tu en as créé un)
const Ceremony = require('../models/cérémonies');

// Route pour récupérer toutes les cérémonies
router.get('/', async (req, res) => {
    try {
        const ceremonies = await Ceremony.find();
        res.status(200).json(ceremonies);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des cérémonies" });
    }
});

// Route pour ajouter une nouvelle cérémonie
router.post('/', async (req, res) => {
    try {
        const ceremony = new Ceremony(req.body);
        await ceremony.save();
        res.status(201).json(ceremony);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la cérémonie" });
    }
});

// Route pour récupérer une cérémonie par ID
router.get('/:id', async (req, res) => {
    try {
        const ceremony = await Ceremony.findById(req.params.id);
        if (!ceremony) return res.status(404).json({ message: "Cérémonie introuvable" });
        res.status(200).json(ceremony);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la cérémonie" });
    }
});

// Route pour mettre à jour une cérémonie
router.put('/:id', async (req, res) => {
    try {
        const ceremony = await Ceremony.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ceremony) return res.status(404).json({ message: "Cérémonie introuvable" });
        res.status(200).json(ceremony);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la cérémonie" });
    }
});

// Route pour supprimer une cérémonie
router.delete('/:id', async (req, res) => {
    try {
        const ceremony = await Ceremony.findByIdAndDelete(req.params.id);
        if (!ceremony) return res.status(404).json({ message: "Cérémonie introuvable" });
        res.status(200).json({ message: "Cérémonie supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la cérémonie" });
    }
});

module.exports = router;