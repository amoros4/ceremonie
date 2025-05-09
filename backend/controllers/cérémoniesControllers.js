const Ceremonie = require('../models/cérémonie');

// Créer une cérémonie
exports.creerCeremonie = async (req, res) => {
    try {
        const nouvelleCeremonie = new Ceremonie(req.body);
        await nouvelleCeremonie.save();
        res.status(201).json({ message: 'Cérémonie créée avec succès', data: nouvelleCeremonie });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la cérémonie', error: error.message });
    }
};

// Récupérer toutes les cérémonies
exports.lireToutesLesCeremonies = async (req, res) => {
    try {
        const ceremonies = await Ceremonie.find();
        res.status(200).json(ceremonies);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des cérémonies', error: error.message });
    }
};

// Récupérer une cérémonie par ID
exports.lireCeremonieParId = async (req, res) => {
    try {
        const ceremonie = await Ceremonie.findById(req.params.id);
        if (!ceremonie) return res.status(404).json({ message: 'Cérémonie non trouvée' });
        res.status(200).json(ceremonie);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la cérémonie', error: error.message });
    }
};

// Mettre à jour une cérémonie
exports.mettreAJourCeremonie = async (req, res) => {
    try {
        const ceremonie = await Ceremonie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ceremonie) return res.status(404).json({ message: 'Cérémonie non trouvée' });
        res.status(200).json({ message: 'Cérémonie mise à jour avec succès', data: ceremonie });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la cérémonie', error: error.message });
    }
};

// Supprimer une cérémonie
exports.supprimerCeremonie = async (req, res) => {
    try {
        const ceremonie = await Ceremonie.findByIdAndDelete(req.params.id);
        if (!ceremonie) return res.status(404).json({ message: 'Cérémonie non trouvée' });
        res.status(200).json({ message: 'Cérémonie supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la cérémonie', error: error.message });
    }
};
