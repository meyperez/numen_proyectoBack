const { Contacto } = require('../models/contactos');

module.exports = validateList = async (req, res, next) => {
    try {
        const lista = await Contacto.findOne()
        if (lista !== null) {
            next();
        } else {
            return res.status(501).json({ msg: "No tenés contactos en tu Agenda." });
        }
    } catch (error) {
        res.status(501).json(error);
    }
}