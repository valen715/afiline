'use strict';
module.exports = (sequelize, Sequelize) => {
	const Usuario = sequelize.define(
		'Usuarios',
		{
			id: {
				type: Sequelize.INTEGER(8).UNSIGNED,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre_completo: {
				type: Sequelize.STRING(64),
			},
			ocupacion: {
				type: Sequelize.STRING(64),
			},
			numero: {
				type: Sequelize.STRING(20),
			},
			usuario: {
				type: Sequelize.STRING(64),
			},
			contrasena: {
				type: Sequelize.CHAR(60),
			},
		},
		{
			indexes: [
				{
					unique: true,
					fields: ['usuario', 'numero'],
				},
			],
			charset: 'utf8',
			collate: 'utf8_unicode_ci',
		},
	);
	return Usuario;
};
