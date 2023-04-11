const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactos = new Schema ({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
    },
    comments: {
        type: String,
    }
})

const Contacto = mongoose.model('Agenda', contactos);
module.exports = {Contacto};