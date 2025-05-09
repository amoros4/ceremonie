const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    nomComplet: {
        type: String,
        required: true,
        trim: true
    },
    adresseEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    objet: {
        type: String,
        required: false,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('contact', ContactSchema);