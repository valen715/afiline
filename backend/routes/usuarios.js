'use strict';
const express = require('express');

const router = express.Router({ mergeParams: true });
const usuarioController = require('../controllers/Usuarios.controller');
const auth = require('../middlewares/auth');

router.post('/registro', usuarioController.registro);
router.post('/iniciar', usuarioController.iniciar);
router.get('/perfil', auth.verificarToken, usuarioController.perfil);
router.patch(
	'/cambiar-usuario',
	auth.verificarToken,
	usuarioController.cambiarUsuario,
);
router.patch(
	'/cambiar-numero',
	auth.verificarToken,
	usuarioController.cambiarNumero,
);
router.patch(
	'/cambiar-contrasena',
	auth.verificarToken,
	usuarioController.cambiarContrasena,
);
router.delete(
	'/eliminar-usuario',
	auth.verificarToken,
	usuarioController.eliminarUsuario,
);

/**
 * Calculador
 */
router.get(
	'/operaciones-mes/:year/:mes',
	auth.verificarToken,
	usuarioController.operacionesDelMes,
);
router.get(
	'/operaciones-mes/ultimo',
	auth.verificarToken,
	usuarioController.operacionesUltimoMes,
);

module.exports = router;
