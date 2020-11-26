'use strict';
const auth = {};
const jwt = require('jsonwebtoken');
const db = require('../models');
const Usuario = db.usuario;

auth.verificarToken = async (req, res, next) => {
	const token = req.headers['authorization'];
	if (!token) {
		return res.status(401).json({ statusError: 'No Token!' });
	}
	jwt.verify(token, process.env.SECRET, async (err, decoded) => {
		if (err) {
			return res.status(401).json({ statusError: 'Unauthorized' });
		}
		const usuario = await Usuario.findByPk(decoded.id);
		if (usuario === null) {
			return res.status(401).json({ statusError: 'Unauthorized' });
		}
		const usuarioPlano = usuario.toJSON();
		delete usuarioPlano.contrasena;
		req.usuario = usuarioPlano;
		next();
	});
};

module.exports = auth;
