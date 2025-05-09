const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');

// Route pour envoyer un message de contact
router.post('/', async (req, res) => {
    try {
        const { fullName, email, subject, message } = req.body;

        if (!fullName || !email || !subject || !message) {
            return res.status(400).json({ message: "Tous les champs sont requis" });
        }

        const contactMessage = new Contact({ fullName, email, subject, message });
        await contactMessage.save();
        res.status(201).json({ message: "Message envoyé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de l'envoi du message" });
    }
});

// Route pour récupérer tous les messages de contact (administration)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des messages" });
    }
});

// Route pour supprimer un message de contact par ID (administration)
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: "Message introuvable" });
        res.status(200).json({ message: "Message supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression du message" });
    }
});

module.exports = router;
