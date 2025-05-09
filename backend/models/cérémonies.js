const mongoose = require('mongoose');

const CeremonieSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    lieu: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    taper: {
        type: String,
        required: false,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('cérémonie', CeremonieSchema);
