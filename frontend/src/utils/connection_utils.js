const resToJson = async (res) => {
	const contentType = res.headers.get('content-type');
	if (contentType && contentType.indexOf('application/json') !== -1) {
		return await res.json();
	}
	return null;
};
export const http_call = async (
	url,
	method = 'get',
	body = {},
	headers = {},
	controller = new AbortController(),
) => {
	try {
		const options = {
			method: method.toUpperCase(),
			signal: controller.signal,
			headers: {
				...headers,
			},
		};
		if (
			typeof body === 'object' &&
			!(Object.keys(body).length === 0 && body.constructor === Object)
		) {
			options.body = JSON.stringify(body);
			options.headers['Content-Type'] = 'application/json';
		}
		const timeOutCheck = setTimeout(() => controller.abort(), 15 * 1000);
		const res = await fetch(
			process.env.REACT_APP_BACKEND_URI + url,
			options,
		);
		clearTimeout(timeOutCheck);
		const json = await resToJson(res);
		if (res.status === 404)
			return {
				err: { statusError: 'El endpoint en el backend no existe' },
				res: json,
			};
		else if (res.status === 400)
			return {
				err: { statusError: 'Mala petición al Backend...' },
				res: json,
			};
		else if (res.status === 401)
			return { err: { statusError: 'Token invalido' }, res: json };
		else if (res.status >= 500)
			return { err: { statusError: 'Error del servidor' }, res: json };
		return {
			err: json === null ? { statusError: 'Bad response' } : null,
			res: json,
		};
	} catch (err) {
		return { err: { statusError: err }, res: null };
	} finally {
		controller.abort();
	}
};
export const guardarUsuario = (usuario) => {
	if (
		typeof usuario === 'object' &&
		!(Object.keys(usuario).length === 0 && usuario.constructor === Object)
	) {
		localStorage.setItem('usuario', JSON.stringify(usuario));
		return true;
	} else {
		return false;
	}
};
export const obtenerUsuario = () => {
	try {
		return JSON.parse(localStorage.getItem('usuario'));
	} catch (error) {
		return null;
	}
}
const guardarToken = (token) => {
	localStorage.setItem('token', token);
};
export const obtenerToken = () => {
	return localStorage.getItem('token');
};


export const Registrar = (
	nombre_completo,
	ocupacion,
	numero,
	usuario,
	contrasena,
) => {
	return http_call('/usuarios/registro', 'POST', {
		nombre_completo,
		ocupacion,
		numero,
		usuario,
		contrasena,
	});
};

export const Iniciar = async (usuario = '', numero = '', contrasena) => {
	if (usuario === '' && numero === '') {
		return {
			err: null,
			res: { statusError: 'No se ingreso ni un usuario, ni un numero' },
		};
	}
	const { err, res } = await http_call('/usuarios/iniciar', 'POST', {
		numero,
		usuario,
		contrasena,
	});
	if (res?.token) {
		guardarUsuario(res.usuario);
		guardarToken(res.token);
		return { err: null, res: res };
	} else {
		return { err, res };
	}
};

export const CambiarUsuario = (usuario, contrasena) => {
	return http_call(
		'/usuarios/registro',
		'PATCH',
		{ usuario, contrasena },
		{ Authorization: obtenerToken() },
	);
};
export const CambiarNumero = (numero, contrasena) => {
	return http_call(
		'/usuarios/cambiar-usuario',
		'PATCH',
		{ numero, contrasena },
		{ Authorization: obtenerToken() },
	);
};
export const CambiarContrasena = (nuevaContrasena, contrasena) => {
	return http_call(
		'/usuarios/cambiar-usuario',
		'PATCH',
		{ nuevaContrasena, contrasena },
		{ Authorization: obtenerToken() },
	);
};

export const EliminarUsuario = () => {
	return http_call(
		'/usuarios/eliminar-usuario',
		'DELETE',
		{},
		{ Authorization: obtenerToken() },
	);
};

export const AgregarIngreso = (valor, fecha, nombre) => {
	return http_call(
		'/ingresos/agregar-ingreso',
		'POST',
		{
			valor,
			fecha: fecha,
			nombre,
		},
		{ Authorization: obtenerToken() },
	);
};
export const ModificarValorIngreso = (id, valor) => {
	return http_call(
		`/ingresos/modificar-valor/${id}`,
		'PATCH',
		{
			valor,
		},
		{ Authorization: obtenerToken() },
	);
};
export const ModificarFechaIngreso = (id, fecha) => {
	return http_call(
		`/ingresos/modificar-fecha/${id}`,
		'PATCH',
		{
			fecha: fecha,
		},
		{ Authorization: obtenerToken() },
	);
};
export const ModificarNombreIngreso = (id, nombre) => {
	return http_call(
		`/ingresos/modificar-nombre/${id}`,
		'PATCH',
		{
			nombre,
		},
		{ Authorization: obtenerToken() },
	);
};
export const EliminarIngreso = (id) => {
	return http_call(
		`/ingresos/eliminar-ingreso/${id}`,
		'DELETE',
		{},
		{ Authorization: obtenerToken() },
	);
};
export const AgregarEgreso = (valor, fecha, nombre) => {
	return http_call(
		'/egresos/agregar-egreso',
		'POST',
		{
			valor,
			fecha,
			nombre,
		},
		{ Authorization: obtenerToken() },
	);
};
export const ModificarValorEgreso = (id, valor) => {
	return http_call(
		`/egresos/modificar-valor/${id}`,
		'PATCH',
		{
			valor,
		},
		{ Authorization: obtenerToken() },
	);
};
export const ModificarFechaEgreso = (id, fecha) => {
	return http_call(
		`/egresos/modificar-fecha/${id}`,
		'PATCH',
		{
			fecha: fecha,
		},
		{ Authorization: obtenerToken() },
	);
};
export const ModificarNombreEgreso = (id, nombre) => {
	return http_call(
		`/egresos/modificar-nombre/${id}`,
		'PATCH',
		{
			nombre,
		},
		{ Authorization: obtenerToken() },
	);
};
export const EliminarEgreso = (id) => {
	return http_call(
		`/egresos/eliminar-egreso/${id}`,
		'DELETE',
		{},
		{ Authorization: obtenerToken() },
	);
};
