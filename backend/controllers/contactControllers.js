const Contact = require('../models/contact');

// Envoyer un message de contact
exports.envoyerMessage = async (req, res) => {
    try {
        const nouveauMessage = new Contact(req.body);
        await nouveauMessage.save();
        res.status(201).json({ message: 'Message envoyé avec succès', data: nouveauMessage });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de lenvoi du message', error: error.message });
    }
};

// Récupérer tous les messages de contact
exports.lireTousLesMessages = async (req, res) => {
    try {
        const messages = await Contact.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des messages', error: error.message });
    }
};

// Récupérer un message de contact par ID
exports.lireMessageParId = async (req, res) => {
    try {
        const message = await Contact.findById(req.params.id);
        if (!message) return res.status(404).json({ message: 'Message non trouvé' });
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du message', error: error.message });
    }
};

// Supprimer un message de contact
exports.supprimerMessage = async (req, res) => {
    try {
        const message = await Contact.findByIdAndDelete(req.params.id);
        if (!message) return res.status(404).json({ message: 'Message non trouvé' });
        res.status(200).json({ message: 'Message supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du message', error: error.message });
    }
};
