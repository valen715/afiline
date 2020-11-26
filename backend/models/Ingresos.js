'use strict';
module.exports = (sequelize, Sequelize) => {
	const Ingreso = sequelize.define('Ingresos', {
		id: {
			type: Sequelize.INTEGER(8).UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		id_usuario: {
			type: Sequelize.INTEGER(8).UNSIGNED,
		},
		nombre: {
			type: Sequelize.STRING(64),
		},
		valor: {
			type: Sequelize.DECIMAL(15, 2),
		},
		fecha: {
			type: Sequelize.DATEONLY,
		},
	});
	return Ingreso;
};
