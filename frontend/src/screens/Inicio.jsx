import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Inicio.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Iniciar } from '../utils/connection_utils';

export const Inicio = () => {
	const history = useHistory();
	const [usuarioNumero, setUsuarioNumero] = useState('');
	const [contrasena, setContrasena] = useState('');

	const [usuarioNumeroError, setUsuarioNumeroError] = useState(false);
	const [contrasenaError, setContrasenaError] = useState(false);

	const [cargando, setCargando] = useState(false);

	const { state } = useLocation();

	const doInicio = async (e) => {
		e.preventDefault();

		setUsuarioNumeroError(false);
		setContrasenaError(false);
		setCargando(true);
		const { err, res } = await Iniciar(
			usuarioNumero,
			usuarioNumero,
			contrasena,
		);
		setCargando(false);
		if (
			res?.statusError ===
			'No existe un usuario con ese nombre de usuario o numero telefonico'
		) {
			setUsuarioNumeroError(
				'No existe un usuario con ese nombre de usuario o numero telefonico',
			);
		} else if (res?.statusError === 'Contrasena Incorrecta') {
			setContrasenaError('Contraseña Incorrecta');
		} else if (err) {
			setUsuarioNumeroError('Ocurrio un error, intentalo más tarde');
		} else {
			history.push('/bienvenido');
		}
	};
	return (
		<div className="inicio">
			<Navbar titulo="Inicio de sesión" />
			<div className="container py-0">
				<div className="titulo">
					<h1 className="m-0">Iniciar sesión</h1>
				</div>
				<form onSubmit={doInicio}>
					<div className="entrada">
						{state?.fromRegistro && (
							<div
								className="alert alert-success alert-dismissible my-0 mb-1 fade show"
								role="alert"
							>
								<strong>Registrado! </strong>
								Ahora puedes iniciar sesión!
								<button
									type="button"
									className="close"
									data-dismiss="alert"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						)}

						<div className="input-group">
							<input
								value={usuarioNumero}
								onChange={(e) => {
									setUsuarioNumero(e.target.value);
									setUsuarioNumeroError(false);
								}}
								type="text"
								className={`form-control ${
									usuarioNumeroError ? 'is-invalid' : 'mb-3'
								}`}
								placeholder="Usuario o número*"
							/>
							<small className="invalid-feedback mb-2">
								{usuarioNumeroError || ''}
							</small>
						</div>
						<div className="entrada2 mt-5">
							<div className="input-group">
								<input
									value={contrasena}
									onChange={(e) => {
										setContrasena(e.target.value);
										setContrasenaError(false);
									}}
									type="password"
									className={`form-control ${
										contrasenaError ? 'is-invalid' : 'mb-3'
									}`}
									placeholder="Contraseña*"
								/>
								<small className="invalid-feedback mb-2">
									{contrasenaError || ''}
								</small>
							</div>
						</div>
					</div>
					<div className="campos">
						<p className="font-weight-light">
							Los campos (*) son obligatorios
						</p>
					</div>
					<div className="position">
						<button
							disabled={
								cargando ||
								usuarioNumero === '' ||
								contrasena === ''
							}
							type="submit"
							className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
						>
							Iniciar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Inicio;
