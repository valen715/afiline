import React, { useState, useEffect } from 'react';
import '../styles/Estadisticas.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { http_call, obtenerToken } from '../utils/connection_utils';
import Contable from '../components/Contable';

export const Estadisticas = () => {
	const [date, setDate] = useState(
		new Date().toISOString().slice(0, 10).replace('T', ' '),
	);

	const [cargando, setCargando] = useState(true);
	const [ingresos, setIngresos] = useState([]);
	const [egresos, setEgresos] = useState([]);
	const [balance, setBalance] = useState(0);
	// const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			setCargando(true);
			const d = new Date(date);
			const year = d.getFullYear();
			const mes = d.getMonth();
			if (isNaN(year) || isNaN(mes)) {
				return;
			}
			const { err, res } = await http_call(
				`/usuarios/operaciones-mes/${year}/${mes + 1}`,
				'GET',
				undefined,
				{ Authorization: obtenerToken() },
				abortController,
			);
			// setError(err);
			if (res === null || err !== null) {
				return;
			}
			setIngresos(res.data.ingresos);
			setEgresos(res.data.egresos);
			const balance =
				res.data.ingresos.reduce(
					(acc, ingreso) => acc + parseFloat(ingreso.valor),
					0,
				) -
				res.data.egresos.reduce(
					(acc, egreso) => acc + parseFloat(egreso.valor),
					0,
				);
			setBalance(balance);
			setCargando(false);
		};
		fetchData();
		return () => abortController.abort();
	}, [date]);

	useEffect(() => {}, []);
	return (
		<>
			<Navbar titulo="Estadísticas" />
			<h1>Estadísticas</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<p className="fecha mt-4">
							Digite la fecha del balance deseado
						</p>
						<input
							value={date}
							onChange={(e) => setDate(e.target.value)}
							type="date"
						/>
					</div>
				</div>
				{(ingresos === null || egresos === null) && cargando ? (
					<h1>Cargando...</h1>
				) : (
					<>
						{!(ingresos?.length === 0 && egresos?.length === 0) && (
							<h1>Balance: {balance}</h1>
						)}
						<div className="row mt-4">
							<div className="col-md-6">
								<h2>Ingresos</h2>
								{ingresos?.length === 0 && (
									<h3>Todavía no tienes ingresos</h3>
								)}
								{ingresos?.map((ingreso, i) => (
									<Contable
										type="ingreso"
										key={i}
										contable={ingreso}
										disabled={true}
									/>
								))}
							</div>
							<div className="col-md-6">
								<h2>Egresos</h2>
								{egresos?.length === 0 && (
									<h3>Todavía no tienes egresos</h3>
								)}
								{egresos?.map((egreso, i) => (
									<Contable
										type="egreso"
										key={i}
										contable={egreso}
										disabled={true}
									/>
								))}
							</div>
							<div className="overflow-auto h-36vh"></div>
						</div>
					</>
				)}

				<div className="est-btn">
					<button
						type="button"
						className="btn btn-lg active btn-block rounded-pill text-white"
					>
						<Link to="/pag-principal" className="text-white">
							Pantalla principal
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Estadisticas;
