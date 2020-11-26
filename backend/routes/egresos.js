'use strict';
const express = require('express');
const router = express.Router();
const egresosController = require('../controllers/Egresos.controller');
const auth = require('../middlewares/auth');

router.get(
	'/obtener-egresos',
	auth.verificarToken,
	egresosController.obtenerVarios,
);
router.get(
	'/obtener-egreso/:id',
	auth.verificarToken,
	egresosController.obtener,
);
router.post('/agregar-egreso', auth.verificarToken, egresosController.agregar);
router.patch(
	'/modificar-valor/:id',
	auth.verificarToken,
	egresosController.modificarValor,
);
router.patch(
	'/modificar-fecha/:id',
	auth.verificarToken,
	egresosController.modificarFecha,
);
router.patch(
	'/modificar-nombre/:id',
	auth.verificarToken,
	egresosController.modificarNombre,
);
router.delete(
	'/eliminar-egreso/:id',
	auth.verificarToken,
	egresosController.eliminarEgreso,
);

module.exports = router;
