'use strict';
const db = require('../models');
const Egreso = db.egreso;
const controller = {};

controller.obtenerVarios = async (req, res) => {
	try {
		let egresos = await Egreso.findAll({
			where: {
				id_usuario: req.usuario.id,
			},
		});
		res.status(200).json({ data: egresos });
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};
controller.obtener = async (req, res) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).json({
			statusError: 'No se paso el parametro id en la url',
		});
		return;
	}
	try {
		let egreso = await Egreso.findByPk(id);
		if (egreso === null) {
			res.status(404).json({
				statusError: `No existe un egreso con id ${id}`,
			});
		} else if (egreso.id_usuario != req.usuario.id) {
			res.status(403).json({
				statusError: `El egreso #${req.params.id} no le pertenece al usuario #${req.usuario.id}`,
			});
		} else {
			res.status(200).json({ data: egreso });
		}
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};

controller.agregar = async (req, res) => {
	const { valor, fecha, nombre } = req.body;
	// Deconstrucción y Comprobación de la petición
	if (
		(valor === undefined) |
		(fecha === undefined) |
		(nombre === undefined)
	) {
		res.status(400).json({
			statusError: 'Mala peticion, debe tener: valor, fecha, nombre.',
		});
		return;
	}
	try {
		//Good ending: Registrar el Egreso
		await Egreso.create({
			nombre,
			valor,
			fecha,
			id_usuario: req.usuario.id,
		});
		res.status(200).json({ statusText: 'Usuario registrado exitosamente' });
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};
controller.modificarNombre = async (req, res) => {
	const { nombre } = req.body;
	if (!nombre) {
		res.status(400).json({
			statusError: 'Mala petición debe tener: Nombre',
		});
		return;
	}

	try {
		let egreso = await Egreso.findByPk(req.params.id);
		if (egreso === null) {
			res.status(404).json({
				statusError: `El egreso #${req.params.id} no existe!`,
			});
		}
		if (egreso.id_usuario != req.usuario.id) {
			res.status(403).json({
				statusError: `El egreso #${req.params.id} no le pertenece al usuario #${req.usuario.id}`,
			});
		} else {
			await Egreso.update({ nombre }, { where: { id: req.params.id } });
			res.status(200).json({
				statusText: 'Se han modificado los datos exitosamente',
			});
		}
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};
controller.modificarValor = async (req, res) => {
	const { valor } = req.body;
	if (!valor) {
		res.status(400).json({
			statusError: 'Mala petición debe tener: Valor',
		});
		return;
	}

	try {
		let egreso = await Egreso.findByPk(req.params.id);
		if (egreso === null) {
			res.status(404).json({
				statusError: `El ingreso #${req.params.id} no existe!`,
			});
		}
		if (egreso.id_usuario != req.usuario.id) {
			res.status(403).json({
				statusError: `El egreso #${req.params.id} no le pertenece al usuario #${req.usuario.id}`,
			});
		} else {
			await Egreso.update({ valor }, { where: { id: req.params.id } });
			res.status(200).json({
				statusText: 'Se han modificado los datos exitosamente',
			});
		}
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};
controller.modificarFecha = async (req, res) => {
	const { fecha } = req.body;
	if (!fecha | !req.params.id) {
		res.status(400).json({
			statusError:
				'Mala petición debe tener: Fecha y id en los parametros',
		});
		return;
	}
	try {
		let egreso = await Egreso.findByPk(req.params.id);
		if (egreso === null) {
			res.status(404).json({
				statusError: `El ingreso #${req.params.id} no existe!`,
			});
		}
		if (egreso.id_usuario != req.usuario.id) {
			res.status(403).json({
				statusError: `El egreso #${req.params.id} no le pertenece al usuario #${req.usuario.id}`,
			});
		} else {
			await Egreso.update({ fecha }, { where: { id: req.params.id } });
			res.status(200).json({
				statusText: 'Se han modificado los datos exitosamente',
			});
		}
	} catch (error) {
		res.status(500).json({
			statusError: `Ocurrio un error en el servidor ${error.message}`,
		});
	}
};
controller.eliminarEgreso = async (req, res) => {
	if (!req.params.id) {
		res.status(400).json({
			statusError: 'Mala petición debe tener: Id en los parametros',
		});
		return;
	}
	let egreso = await Egreso.findByPk(req.params.id);
	if (ingreo === null) {
		res.status(404).json({
			statusError: `El ingreso #${req.params.id} no existe!`,
		});
	}
	if (egreso.id_usuario != req.usuario.id) {
		res.status(403).json({
			statusError: `El egreso #${req.params.id} no le pertenece al usuario #${req.usuario.id}`,
		});
	} else {
		try {
			await Egreso.destroy({ where: { id: req.params.id } });
		} catch (error) {
			res.status(500).json({
				statusError: `Ocurrio un error en el servidor ${error.message}`,
			});
			return;
		}
		res.status(200).json({
			statusText: 'Se han modificado los datos exitosamente',
		});
	}
};

module.exports = controller;
