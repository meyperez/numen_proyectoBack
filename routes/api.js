const express = require('express');
const router = express.Router()
const apiController = require('../controllers/apiController');
const { check } = require('express-validator');
const validateID = require('../middleware/validateID');
const validateList = require('../middleware/validateList');
const { validateCreateData } = require('../middleware/validateCreateData');
const { validateEditData } = require('../middleware/validateEditData');


//Rutas
router.get('/ver', validateList, apiController.listaContactos);
router.get('/ver/:id', validateID, apiController.contactoUnico);

router.post('/crear', validateCreateData, apiController.crear);

router.put('/editar/:id', validateID, validateEditData, apiController.editar);

router.delete('/eliminar/:id', validateID, apiController.eliminar);
router.delete('/eliminar', apiController.eliminarTodos);

router.get('/apiRickMorty', apiController.apiRickMorty);

module.exports = router;