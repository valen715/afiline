'use strict';
if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === undefined)
	require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuarios');
const ingresosRouter = require('./routes/ingresos');
const egresosRouter = require('./routes/egresos');

const app = express();


const db = require('./models/index');
db.sequelize
	.sync()
	.then(() => {
		console.log('La base de datos se ha conectado con Exito');
	})
	.catch((e) => {
		console.error('La base de datos fallo con el siguiente error:', e);
		process.exit(1);
	});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/ingresos', ingresosRouter);
app.use('/egresos', egresosRouter);

app.get('/', (res) => {
	res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
	console.log(
		`Backend corriendo en: http://localhost:${process.env.PORT || 3000}`,
	);
});

module.exports = app;