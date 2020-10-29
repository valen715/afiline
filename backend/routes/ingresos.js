'use strict';
const express = require('express');
const router = express.Router();
const ingresosController = require('../controllers/Ingresos.controller');
const auth = require('../middlewares/auth');

router.get(
	'/obtener-ingresos',
	auth.verificarToken,
	ingresosController.obtenerVarios,
);
router.get(
	'/obtener-ingreso/:id',
	auth.verificarToken,
	ingresosController.obtener,
);
router.post(
	'/agregar-ingreso',
	auth.verificarToken,
	ingresosController.agregar,
);
router.patch(
	'/modificar-valor/:id',
	auth.verificarToken,
	ingresosController.modificarValor,
);
router.patch(
	'/modificar-fecha/:id',
	auth.verificarToken,
	ingresosController.modificarFecha,
);
router.patch(
	'/modificar-nombre/:id',
	auth.verificarToken,
	ingresosController.modificarNombre,
);
router.delete(
	'/eliminar-ingreso/:id',
	auth.verificarToken,
	ingresosController.eliminarIngreso,
);

module.exports = router;
