const {Contacto} = require('../models/contactos');

module.exports = validateID = async (req, res, next) => {
    try {
        const item = await Contacto.findById(req.params.id)
        if (item !== null) {
            next();
        } else {
            return res.status(501).json({msg: "El ID no es válido"});
        }
    } catch (error) {
        res.status(501).json(error);
    }
}