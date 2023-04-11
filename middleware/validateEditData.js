const { check } = require('express-validator');


const validateEditData = [
    check('category').not().isEmpty().withMessage('El campo Categoría es obligatorio para editar el contacto.').isLength({ min: 3, max: 15 }).withMessage('La categoría debe tener entre 3 y 15 caracteres.'),
    check('name').not().isEmpty().withMessage('El campo Nombre es obligatorio para editar el contacto.').isLength({ min: 3, max: 20 }).withMessage('El Nombre debe tener entre 3 y 20 caracteres.'),
    check('lastName').not().isEmpty().withMessage('El campo Apellido es obligatorio para editar el contacto.').isLength({ min: 3, max: 20 }).withMessage('El Nombre debe tener entre 3 y 20 caracteres.'),
    check('phone').not().isEmpty().withMessage('El campo Teléfono es obligatorio para editar el contacto.').isLength({ min: 4, max: 15 }).withMessage('El teléfono debe tener entre 4 y 15 caracteres.').isNumeric().withMessage('El teléfono debe ser un número.'),
    check('email').not().isEmpty().withMessage('El campo Email es obligatorio para editar el contacto.').normalizeEmail().isEmail().withMessage('Ingresa un email válido.').trim()
];

module.exports = { validateEditData };