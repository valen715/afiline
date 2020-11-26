'use strict';
const bcrypt = require('bcryptjs');
const db = require('../models');
const { Op, where, fn, col } = require('sequelize');
const jwt = require('jsonwebtoken');
const Usuario = db.usuario;
const Ingreso = db.ingreso;
const Egreso = db.egreso;
const controller = {};

controller.registro = async (req, res) => {
	const {
		nombre_completo,
		ocupacion,
		numero,
		usuario,
		contrasena,
	} = req.body;
	try {
		// Deconstrucción y Comprobación de la petición
		if (
			(nombre_completo === undefined) |
			(ocupacion === undefined) |
			(usuario === undefined) |
			(numero === undefined) |
			(contrasena === undefined)
		) {
			res.status(400).json({
				statusError:
					'Mala peticion, debe tener: nombre_completo, ocupacion, numero, usuario, contrasena.',
			});
			return;
		}

		// Comprobación de existencia de un usuario con mismos datos
		let nuevoUsuario = null;
		nuevoUsuario = await Usuario.findOne({
			where: { usuario },
		});
		if (nuevoUsuario !== null) {
			res.status(400).json({
				statusError: 'Ya existe un usuario con ese nombre de usuario',
			});
			return;
		}
		nuevoUsuario = await Usuario.findOne({
			where: { numero },
		});
		if (nuevoUsuario !== null) {
			res.status(400).json({
				statusError: 'Ya existe un usuario con ese numero',
			});
			return;
		}
		//Good ending: Registrar el usuario
		await Usuario.create({
			nombre_completo,
			ocupacion,
			numero,
			usuario,
			contrasena: await bcrypt.hash(contrasena, 10),
		});
		res.status(200).json({ statusText: 'Usuario registrado exitosamente' });
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};
controller.iniciar = async (req, res) => {
	const { numero, usuario, contrasena } = req.body;
	console.log(req.body);
	try {
		// Deconstrucción y Comprobación de la petición
		if (
			(usuario === undefined && numero === undefined) |
			(contrasena === undefined)
		) {
			res.status(400).json({
				statusError:
					'Mala peticion, debe tener (numero o usuario) y contrasena.',
			});
			return;
		}

		// Comprobación de existencia de un usuario con mismos datos
		const usuarioDB = await Usuario.findOne({
			where: {
				[Op.or]: [{ usuario: usuario || '' }, { numero: numero || '' }],
			},
		});
		if (usuarioDB === null) {
			res.status(404).json({
				statusError:
					'No existe un usuario con ese nombre de usuario o numero telefonico',
			});
		} else {
			const esContrasenaValida = await bcrypt.compare(
				contrasena,
				usuarioDB.contrasena,
			);
			if (esContrasenaValida === false) {
				res.status(401).json({ statusError: 'Contrasena Incorrecta' });
			} else {
				const token = jwt.sign(
					{ id: usuarioDB.id },
					process.env.SECRET,
					{
						expiresIn: 7 * 24 * 60 * 60 * 1000, // 7 dias, 24 horas, 60 minutos, 60 segundos, 1000 milisegundos = Una semana
					},
				);
				const usuarioPlano = usuarioDB.toJSON();
				delete usuarioPlano.contrasena;
				res.status(200).json({ usuario: usuarioPlano, token: token });
			}
		}
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};

controller.cambiarUsuario = async (req, res) => {
	const { usuario } = req;
	const { contrasena } = req.body;
	const nombreUsuario = req.body.usuario;
	if (!nombreUsuario | !contrasena) {
		res.status(400).json({
			statusError: `No se envio la propiedad contrasena o nombreUsuario`,
		});
		return;
	}
	if (!usuario) {
		res.status(400).json({
			statusError: 'No se puede cambiar un usuario que no existe',
		});
	} else {
		try {
			const instanciaUsuario = await Usuario.findByPk(usuario.id);
			if (!bcrypt.compare(contrasena, instanciaUsuario.contrasena)) {
				res.status(401).json({ statusText: 'Contrasena incorrecta' });
				return;
			}

			if (instanciaUsuario.nombreUsuario == nombreUsuario) {
				res.status(304).json({
					statusError:
						'La propiedad era la misma entonces no se cambio',
				});
			} else {
				await Usuario.update(
					{ usuario: nombreUsuario },
					{ where: { id: req.usuario.id } },
				);

				res.status(200).json({
					statusText: 'Se han realizado los cambios con exito',
				});
			}
		} catch (error) {
			res.status(500).json({
				statusError: `Ocurrio un error en el servidor ${error.message}`,
			});
		}
	}
};
controller.cambiarNumero = async (req, res) => {
	const { usuario } = req;
	const { contrasena, numero } = req.body;
	if (!numero | !contrasena) {
		res.status(400).json({
			statusError: `No se envio la propiedad contrasena o numero`,
		});
		return;
	}
	if (!usuario) {
		res.status(400).json({
			statusError: 'No se puede cambiar un usuario que no existe',
		});
	} else {
		try {
			const instanciaUsuario = await Usuario.findByPk(req.usuario.id);
			if (!bcrypt.compare(contrasena, instanciaUsuario.contrasena)) {
				res.status(401).json({ statusText: 'Contrasena incorrecta' });
				return;
			}

			if (instanciaUsuario.numero == numero) {
				res.status(304).json({
					statusError:
						'La propiedad era la misma entonces no se cambio',
				});
			} else {
				await Usuario.update(
					{ numero },
					{ where: { id: req.usuario.id } },
				);

				res.status(200).json({
					statusText: 'Se han realizado los cambios con exito',
				});
			}
		} catch (error) {
			res.status(500).json({
				statusError: `Ocurrio un error en el servidor ${error.message}`,
			});
		}
	}
};
controller.cambiarContrasena = async (req, res) => {
	const { usuario } = req;
	const { contrasena, nuevaContrasena } = req.body;
	if (!contrasena | !nuevaContrasena) {
		res.status(400).json({
			statusError: `No se envio la propiedad contrasena o nuevaContrasena`,
		});
		return;
	}
	if (!usuario) {
		res.status(400).json({
			statusError: 'No se puede cambiar un usuario que no existe',
		});
	} else {
		try {
			const instanciaUsuario = await Usuario.findByPk(req.usuario.id);
			if (!bcrypt.compare(contrasena, instanciaUsuario.contrasena)) {
				res.status(401).json({ statusText: 'Contrasena incorrecta' });
				return;
			}

			await Usuario.update(
				{ contrasena: await bcrypt.hash(nuevaContrasena, 10) },
				{ where: { id: req.usuario.id } },
			);
			res.status(200).json({
				statusText: 'Se han realizado los cambios con exito',
			});
		} catch (error) { }
	}
};

controller.perfil = async (req, res) => {
	res.status(200).json({ ...req.usuario });
};

controller.eliminarUsuario = async (req, res) => {
	try {
		await Usuario.destroy({ where: { id: req.usuario.id } });
		res.status(200).json({
			statusText: 'Se han realizado los cambios con exito',
		});
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};

// Calculador
controller.operacionesDelMes = async (req, res) => {
	const { year, mes } = req.params;
	if (!year | !mes) {
		res.status(400).json({
			statusError: `No se envio el parametro year o mes`,
		});
		return;
	}
	if (isNaN(parseInt(year))) {
		res.status(400).json({
			statusError: `El parametro year no es un numero`,
		});
		return;
	}
	if (isNaN(parseInt(mes))) {
		res.status(400).json({
			statusError: `El parametro mes no es un numero`,
		});
		return;
	}
	try {
		let ingresos = await Ingreso.findAll({
			where: {
				id_usuario: req.usuario.id,
				[Op.and]: [
					where(fn('YEAR', col('fecha')), parseInt(year)),
					where(fn('MONTH', col('fecha')), parseInt(mes)),
				],
			},
		});
		let egresos = await Egreso.findAll({
			where: {
				id_usuario: req.usuario.id,
				[Op.and]: [
					where(fn('YEAR', col('fecha')), parseInt(year)),
					where(fn('MONTH', col('fecha')), parseInt(mes)),
				],
			},
		});
		res.status(200).json({ data: { ingresos, egresos } });
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};
controller.operacionesUltimoMes = async (req, res) => {
	try {
		let ingresos = await Ingreso.findAll({
			where: {
				id_usuario: req.usuario.id,
				[Op.and]: [
					where(fn('YEAR', col('fecha')), fn('YEAR', fn('CURDATE'))),
					where(
						fn('MONTH', col('fecha')),
						fn('MONTH', fn('CURDATE')),
					),
				],
			},
		});
		let egresos = await Egreso.findAll({
			where: {
				id_usuario: req.usuario.id,
				[Op.and]: [
					where(fn('YEAR', col('fecha')), fn('YEAR', fn('CURDATE'))),
					where(
						fn('MONTH', col('fecha')),
						fn('MONTH', fn('CURDATE')),
					),
				],
			},
		});
		res.status(200).json({ data: { ingresos, egresos } });
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};

module.exports = controller;
