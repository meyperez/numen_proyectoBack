const {Contacto} = require('../models/contactos');
const {validationResult} = require('express-validator');
const axios = require('axios');

module.exports = {
    async listaContactos (req, res) {
        const items = await Contacto.find();
        res.json({items})
    },

    async contactoUnico(req, res) {
        const item = await Contacto.findById(req.params.id);
        res.json({item})
    },

    async crear (req, res) {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                const item = new Contacto(req.body);
                await item.save();
                res.status(201).json(item)
            } else {
                res.status(501).json(err)
            };
        } catch (error) {
            res.status(401).json({error})
        }
    },

    async editar (req, res) {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                await Contacto.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json({ msg: req.body.name +' '+ req.body.lastName + ' se ha actualizado correctamente.'})
            } else {
                res.json(err)
            }
        } catch (error) {
            json(error)
        }
    },

    async eliminar (req, res) {
        await Contacto.findByIdAndDelete(req.params.id)
        res.json({msg: 'El contacto ha sido eliminado exitosamente.'})
    },

    async eliminarTodos(req, res) {
        await Contacto.deleteMany()
        res.json({ msg: 'Has vaciado tu agenda.'})
    },

    async apiRickMorty (req, res) {
        const urlApi = "https://rickandmortyapi.com/api/location/?type=planet&name=earth";
        const response = await axios.get(urlApi);
        const planets = await response.data.results;
        res.json(planets)
    }
}