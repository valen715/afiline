import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import '../styles/CalculadorEgresos.css';
import Contable from '../components/Contable';
import { AgregarEgreso } from '../utils/connection_utils';

const MOCK_EGRESO = { nombre: '', valor: 0, fecha: '' };
export const CalculadorEgresos = () => {
	const [egresos, setEgresos] = useState([{ ...MOCK_EGRESO }]);
	const [habilitarEgresos, setHabilitarEgresos] = useState(false);

	useEffect(() => {
		let copiaEgresos = [...egresos];
		let algunEgresoInvalido = copiaEgresos.some(
			({ nombre, valor, fecha }) =>
				typeof nombre === 'undefined' ||
				nombre === '' ||
				typeof valor === 'undefined' ||
				valor === 0 ||
				typeof fecha === 'undefined' ||
				fecha === '',
		);
		if (algunEgresoInvalido) {
			setHabilitarEgresos(false);
		} else {
			setHabilitarEgresos(true);
		}
	}, [egresos, setHabilitarEgresos]);

	const setEgresoNombre = useCallback(
		(nombre, idx) => {
			let copiaEgresos = [...egresos];
			copiaEgresos[idx].nombre = nombre;
			setEgresos(copiaEgresos);
		},
		[egresos],
	);
	const setEgresoValor = useCallback(
		(valor, idx) => {
			let copiaEgresos = [...egresos];
			copiaEgresos[idx].valor = valor;
			setEgresos(copiaEgresos);
		},
		[egresos],
	);
	const setEgresoFecha = useCallback(
		(fecha, idx) => {
			let copiaEgresos = [...egresos];
			copiaEgresos[idx].fecha = fecha;
			setEgresos(copiaEgresos);
		},
		[egresos],
	);
	const addNuevoEgreso = useCallback(() => {
		let copiaEgresos = [...egresos];
		copiaEgresos.push({ ...MOCK_EGRESO });
		setEgresos(copiaEgresos);
	}, [egresos]);
	const popEgreso = useCallback(() => {
		let copiaEgresos = [...egresos];
		copiaEgresos.pop();
		setEgresos(copiaEgresos);
	}, [egresos]);

	const history = useHistory();
	const [cargando, setCargando] = useState(false);
	const [mensajeCarga, setMensajeCarga] = useState('asd');
	const [porcentajeCarga, setPorcentajeCarga] = useState(0);
	const [error, setError] = useState(false);

	const doTerminar = async () => {
		setError(false);
		setPorcentajeCarga(0);
		setCargando(true);
		const copiaEgresos = [...egresos].reverse();
		let exito = true;
		for (let idx = 0; idx < copiaEgresos.length; idx++) {
			const { valor, fecha, nombre } = copiaEgresos[idx];
			setMensajeCarga(`Guardando Egreso: ${nombre}`);
			setPorcentajeCarga(100 * (idx / copiaEgresos.length));
			//Fetch aqui uwu
			const { res } = await AgregarEgreso(valor, fecha, nombre);
			if (res?.statusText?.includes('registrado exitosamente')) {
				popEgreso();
			} else {
				setError(
					`Ocurrio un error guardando el egreso ${nombre}, intentalo mas tarde`,
				);
				exito = false;
				break;
			}
		}
		if (exito) {
			setPorcentajeCarga(100);
			alert('Egresos creados exitosamente!');
			history.push('/calculador');
		} else {
			setCargando(false);
		}
	};

	return (
		<div className="pantalla_bienvenido">
			<Navbar titulo="Egresos" />
			<div>
				<div className="titulo container">
					<div className="titulo mt-5 ">
						<h1 className="text-center">Digitar egresos</h1>
					</div>
					<div
						className="texto container entrada "
						Style="margin-top:7rem;"
					>
						<div className="overflow-auto mh-36vh">
							{egresos?.map((egreso, i) => (
								<Contable
									key={i}
									type="egreso"
									contable={egreso}
									setterNombre={(n) => {
										setEgresoNombre(n, i);
									}}
									setterValor={(v) => {
										setEgresoValor(v, i);
									}}
									setterFecha={(f) => {
										setEgresoFecha(f, i);
									}}
								/>
							))}
						</div>
						<div className="btn_malucoo">
							<button
								onClick={addNuevoEgreso}
								type="button"
								className="btn btn-outline-dark rounded-circle font-weight-bolder mr-1"
								Style="margin-top:0rem; background-color: transparent;"
							>
								+
							</button>
							<button
								onClick={() => {
									if (egresos.length > 1) popEgreso();
								}}
								type="button"
								className="btn btn-outline-dark rounded-circle font-weight-bolder mr-1 "
								Style="margin-top:0rem; background-color: transparent; padding-right: 15px; padding-left: 15px;"
							>
								-
							</button>
							<button
								// onClick={() => alert('Qué hago aquí? :( ')}
								type="button"
								className="btn-slash btn btn-outline-dark rounded-circle font-weight-bolder"
								Style="margin-top:0rem; background-color: transparent;"
							>
								/
							</button>
						</div>
						<div className="container text-center">
							<h3 className="text-danger m-0">{error || ''}</h3>
							{cargando ? (
								<>
									<h3>{mensajeCarga}</h3>
									<div class="progress w-75 mx-auto">
										<div
											class="progress-bar progress-bar-striped progress-bar-animated bg-success"
											role="progressbar"
											aria-valuenow={porcentajeCarga}
											aria-valuemin="0"
											aria-valuemax="100"
											style={{
												width: `${porcentajeCarga}%`,
											}}
										>{`${porcentajeCarga}%`}</div>
									</div>
								</>
							) : (
								<div className="position_e">
									<button
										disabled={!habilitarEgresos}
										onClick={doTerminar}
										type="button"
										className="btn btn-lg active rounded-pill text-white"
										Style="margin-left: 12rem; margin-top: 8.5rem;"
									>
										Terminar
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalculadorEgresos;
