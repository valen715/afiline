import React from 'react';
import '../styles/Registro.css';
import Navbar from '../components/Navbar';
import Registroimg from '../assets/registro.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Registrar } from '../utils/connection_utils';
import {
	CELPHONE_REGEX,
	FULL_NAME_REGEX,
	OCUPATION_REGEX,
	USUARIO_REGEX,
} from '../utils/validations';

const Registro = () => {
	const history = useHistory();
	const [nombreCompleto, setNombreCompleto] = useState('');
	const [ocupacion, setOcupacion] = useState('');
	const [numero, setNumero] = useState('');
	const [usuario, setUsuario] = useState('');
	const [contrasena, setContrasena] = useState('');

	const [nombreCompletoError, setNombreCompletoError] = useState(false);
	const [ocupacionError, setOcupacionError] = useState(false);
	const [numeroError, setNumeroError] = useState(false);
	const [usuarioError, setUsuarioError] = useState(false);
	const [contrasenaError, setContrasenaError] = useState(false);

	const [cargando, setCargando] = useState(false);

	const validarInputs = () => {
		if (FULL_NAME_REGEX.exec(nombreCompleto) === null) {
			setNombreCompletoError('Tu nombre tiene un formato un incorrecto.');
			return false;
		}
		if (OCUPATION_REGEX.exec(ocupacion) === null) {
			setOcupacionError('La ocupación tiene un formato incorrecto.');
			return false;
		}
		if (CELPHONE_REGEX.exec(numero) === null) {
			setNumeroError(
				'El numero de telefono tiene un formato incorrecto.',
			);
			return false;
		}
		if (usuario.includes('@')) {
			setUsuarioError('El nombre de usuario no puede tener @');
			return false;
		}
		if (USUARIO_REGEX.exec(usuario) === null) {
			setUsuarioError(
				'El nombre de usuario tiene un formato incorrecto.',
			);
			return false;
		}
		if (contrasena.length <= 6) {
			setContrasenaError('La contraseña es muy corta!');
			return false;
		}
		return true;
	};

	const doLogin = async (e) => {
		e.preventDefault();

		setOcupacionError(false);
		setNumeroError(false);
		setUsuarioError(false);
		setContrasenaError(false);
		setCargando(true);
		if (!validarInputs()) {
			setCargando(false);
			return;
		}
		const { err, res } = await Registrar(
			nombreCompleto,
			ocupacion,
			numero,
			usuario,
			contrasena,
		);
		setCargando(false);
		if (
			res.statusError === 'Ya existe un usuario con ese nombre de usuario'
		) {
			setUsuarioError('Ya existe un usuario con este nombre!');
		} else if (res.statusError === 'Ya existe un usuario con ese numero') {
			setNumeroError('Ya existe un usuario con ese numero');
		} else if (err) {
			setNombreCompletoError('Ocurrio un error, intentalo más tarde');
		} else {
			history.push('/inicio', { fromRegistro: true });
		}
	};

	return (
		<div className="registro">
			<Navbar titulo="Registro" />
			<div className="titulo">
				<div className="text-center mt-2">
					<p>Crear perfil</p>
				</div>
			</div>
			<div className="img">
				<div className="text-center ">
					<img
						className="rounded-circle"
						src={Registroimg}
						alt=""
						srcSet=""
					/>
				</div>
			</div>
			<div className="img-button">
				<button
					type="button"
					className="btn btn-outline-dark rounded-circle font-weight-bolder"
				>
					+
				</button>
			</div>

			<div className="container">
				<form onSubmit={doLogin}>
					<p className="font_weight m-0 ml-1 mt-3">
						Nombre completo*
					</p>
					<div className="input-group ">
						<input
							value={nombreCompleto}
							onChange={(e) => {
								setNombreCompleto(e.target.value);
								setNombreCompletoError(false);
							}}
							type="text"
							className={`form-control ${
								nombreCompletoError ? 'is-invalid' : 'mb-2'
							}`}
							placeholder="Digite su nombre completo"
						/>
						<small className="invalid-feedback">
							{nombreCompletoError || ''}
						</small>
					</div>
					<p className="font_weight m-0 ml-1 mt-2">Ocupación*</p>
					<div className="input-group">
						<input
							value={ocupacion}
							onChange={(e) => {
								setOcupacion(e.target.value);
								setOcupacionError(false);
							}}
							type="text"
							className={`form-control ${
								ocupacionError ? 'is-invalid' : 'mb-2'
							}`}
							placeholder="Digite su ocupación"
						/>
						<small className="invalid-feedback">
							{ocupacionError || ''}
						</small>
					</div>
					<p className="font_weight m-0 ml-1 mt-2">Número*</p>
					<div className="input-group ">
						<input
							value={numero}
							onChange={(e) => {
								setNumero(e.target.value);
								setNumeroError(false);
							}}
							type="text"
							className={`form-control ${
								numeroError ? 'is-invalid' : 'mb-2'
							}`}
							placeholder="Digite su número de celular"
						/>
						<small className="invalid-feedback">
							{numeroError || ''}
						</small>
					</div>
					<p className="font_weight m-0 ml-1 mt-2">Usuario*</p>
					<div className="input-group ">
						<input
							value={usuario}
							onChange={(e) => {
								setUsuario(e.target.value);
								setUsuarioError(false);
							}}
							type="text"
							className={`form-control ${
								usuarioError ? 'is-invalid' : 'mb-2'
							}`}
							placeholder="Digite su usuario"
						/>
						<small className="invalid-feedback">
							{usuarioError || ''}
						</small>
					</div>
					<p className="font_weight m-0 ml-1 mt-2">Contraseña*</p>
					<div className="input-group ">
						<input
							value={contrasena}
							onChange={(e) => {
								setContrasena(e.target.value);
								setContrasenaError(false);
							}}
							type="password"
							className={`form-control ${
								contrasenaError ? 'is-invalid' : 'mb-2'
							}`}
							placeholder="Digite su contraseña"
						/>
						<small className="invalid-feedback">
							{contrasenaError || ''}
						</small>
					</div>
					<div className="campos">
						<p className="font-weight-light mt-5">
							Los campos (*) son obligatorios
						</p>
					</div>
					<div className="positioon">
						<button
							disabled={
								nombreCompletoError ||
								ocupacionError ||
								numeroError ||
								usuarioError ||
								contrasenaError ||
								cargando ||
								nombreCompleto === '' ||
								ocupacion === '' ||
								numero === '' ||
								usuario === '' ||
								contrasena === ''
							}
							type="submit"
							className="btn btn-lg active btn-block rounded-pill text-white"
						>
							Crear
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registro;
