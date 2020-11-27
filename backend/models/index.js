'use strict';
const config = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	logging: console.log,
	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
	define: { engine: 'InnoDB' },
});

const db = { sequelize, Sequelize };

db.usuario = require('../models/Usuarios')(db.sequelize, db.Sequelize);
db.ingreso = require('../models/Ingresos')(db.sequelize, db.Sequelize);
db.egreso = require('../models/Egresos')(db.sequelize, db.Sequelize);

db.usuario.hasMany(db.ingreso, {
	foreignKey: 'id_usuario',
	onDelete: 'CASCADE',
});
db.usuario.hasMany(db.egreso, {
	foreignKey: 'id_usuario',
	onDelete: 'CASCADE',
});

module.exports = db;
