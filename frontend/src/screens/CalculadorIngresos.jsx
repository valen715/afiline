import React, { useCallback, useState } from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import '../styles/CalculadorEgresos.css';
import Contable from '../components/Contable';
import { AgregarIngreso } from '../utils/connection_utils';
import { useEffect } from 'react';

const MOCK_INGRESO = { nombre: '', valor: 0, fecha: '' };
export const CalculadorIngresos = () => {
	const [ingresos, setIngresos] = useState([{ ...MOCK_INGRESO }]);
	const [habilitarIngresos, setHabilitarIngresos] = useState(false);

	useEffect(() => {
		let copiaIngresos = [...ingresos];
		let algunIngresoInvalido = copiaIngresos.some(
			({ nombre, valor, fecha }) =>
				typeof nombre === 'undefined' ||
				nombre === '' ||
				typeof valor === 'undefined' ||
				valor === 0 ||
				typeof fecha === 'undefined' ||
				fecha === '',
		);
		if (algunIngresoInvalido) {
			setHabilitarIngresos(false);
		} else {
			setHabilitarIngresos(true);
		}
	}, [ingresos, setHabilitarIngresos]);

	const setIngresoNombre = useCallback(
		(nombre, idx) => {
			let copiaIngresos = [...ingresos];
			copiaIngresos[idx].nombre = nombre;
			setIngresos(copiaIngresos);
		},
		[ingresos],
	);
	const setIngresoValor = useCallback(
		(valor, idx) => {
			let copiaIngresos = [...ingresos];
			copiaIngresos[idx].valor = valor;
			setIngresos(copiaIngresos);
		},
		[ingresos],
	);
	const setIngresoFecha = useCallback(
		(fecha, idx) => {
			let copiaIngresos = [...ingresos];
			copiaIngresos[idx].fecha = fecha;
			setIngresos(copiaIngresos);
		},
		[ingresos],
	);
	const addNuevoIngreso = useCallback(() => {
		let copiaIngresos = [...ingresos];
		copiaIngresos.push({ ...MOCK_INGRESO });
		setIngresos(copiaIngresos);
	}, [ingresos]);
	const popIngreso = useCallback(() => {
		let copiaIngresos = [...ingresos];
		copiaIngresos.pop();
		setIngresos(copiaIngresos);
	}, [ingresos]);

	const history = useHistory();
	const [cargando, setCargando] = useState(false);
	const [mensajeCarga, setMensajeCarga] = useState('asd');
	const [porcentajeCarga, setPorcentajeCarga] = useState(50);
	const [error, setError] = useState(false);

	const doTerminar = async () => {
		setError(false);
		setPorcentajeCarga(0);
		setCargando(true);
		const copiaIngresos = [...ingresos].reverse();
		let exito = true;
		for (let idx = 0; idx < copiaIngresos.length; idx++) {
			const { valor, fecha, nombre } = copiaIngresos[idx];
			setMensajeCarga(`Guardando Ingreso: ${nombre}`);
			//
			//Fetch aqui uwu
			const { res } = await AgregarIngreso(valor, fecha, nombre);
			if (res?.statusText?.includes('registrado exitosamente')) {
				popIngreso();
				setPorcentajeCarga(100 * (idx / copiaIngresos.length));
			} else {
				setError(
					`Ocurrio un error guardando el ingreso ${nombre}, intentalo mas tarde`,
				);
				exito = false;
				break;
			}
		}
		if (exito) {
			setPorcentajeCarga(100);
			alert('Ingresos creados exitosamente!');
			history.push('/calculador');
		} else {
			setCargando(false);
		}
	};

	return (
		<div className="pantalla_bienvenido">
			<Navbar titulo="Ingresos" />
			<div>
				<div className="titulo container p-0">
					<div className="titulo mt-5 ">
						<h1 className="text-center">Digitar Ingresos</h1>
					</div>
					<div
						className="texto container entrada "
						Style="margin-top:7rem;"
					>
						<div className="overflow-auto mh-36vh">
							{ingresos?.map((ingreso, i) => (
								<Contable
									type="ingreso"
									key={i}
									contable={ingreso}
									setterNombre={(n) => {
										setIngresoNombre(n, i);
									}}
									setterValor={(v) => {
										setIngresoValor(v, i);
									}}
									setterFecha={(f) => {
										setIngresoFecha(f, i);
									}}
								/>
							))}
						</div>
						<div className="btn_malucoo">
							<button
								onClick={addNuevoIngreso}
								type="button"
								className="btn btn-outline-dark rounded-circle font-weight-bolder mr-1"
								Style="margin-top:0rem; background-color: transparent;"
							>
								+
							</button>
							<button
								onClick={() => {
									if (ingresos.length > 1) popIngreso();
								}}
								type="button"
								className="btn btn-outline-dark rounded-circle font-weight-bolder mr-1 "
								Style="margin-top:0rem; background-color: transparent; padding-right: 15px; padding-left: 15px;"
							>
								-
							</button>
							<button
								
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
										disabled={!habilitarIngresos}
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

export default CalculadorIngresos;
