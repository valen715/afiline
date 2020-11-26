import React from 'react';
import '../styles/Calculador.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { http_call, obtenerToken } from '../utils/connection_utils';

export const Calculador = () => {
	const [aviso, setAviso] = useState(false);
	const [ingresos, setIngresos] = useState([]);
	const [egresos, setEgresos] = useState([]);
	const [balance, setBalance] = useState(0);
	// const [cargando, setCargando] = useState(false);

	return (
		<div className="calculador1">
			<div className="container">
				<h1 className="text-center mt-5 ">Calculador</h1>
				{aviso && (
					<div className="table">
						<table
							class="egt mx-auto text-center"
							Style="border-radius: 15px;"
						>
							<tbody>
								<tr>
									<h4 className="tc-cal">
										{balance < 0 ||
										(ingresos.length === 0 &&
											egresos.length === 0)
											? '¡¡¡Aviso importante!!!'
											: 'Su resultado es'}
									</h4>
									<p>
										{ingresos.length === 0 &&
										egresos.length === 0
											? 'Todavía no tienes ni ingresos, ni egresos, crealos'
											: balance < 0
											? `Sus egresos han sobrepasado la cantidad de sus ingresos con un valor ${balance}`
											: `$${balance}, felicitaciones no ha sobrepasado los ingresos`}
									</p>
								</tr>
								<tr>
									<button
										type="button"
										className="cal-btn btn"
										Style="background-color: #82d78b;"
									>
										<Link
											to="/pag-principal"
											Style="color: black;"
										>
											{' '}
											Ir a la página principal
										</Link>
									</button>
									<div
										className="cal-btn1 btn"
										Style="background-color: #82d78b;"
									>
										<Link
											to="/estadisticas"
											Style="color: black;"
										>
											Ir a las estadísticas
										</Link>
									</div>
								</tr>
							</tbody>
						</table>
					</div>
				)}
				<div className={`button_1 ml-4 mr-4 ${aviso ? '' : 'mt-12'}`}>
					<button
						type="button"
						className="btn  btn-lg btn-block text-left"
						Style="color: #4c9954; background-color: #8bed96;"
					>
						Ingresos
						<span className="ingresos">
							<span
								type="button"
								className="btn btn-outline-dark font-weight-bolder "
								Style="background-color: #8bed96; border: none;; padding-right: 18px;"
							>
								<Link
									to="/calculadoringresos"
									Style="color: #4c9954; padding-left: 147px;"
								>
									+
								</Link>
							</span>
						</span>
						<div className="ingresos-button"></div>
					</button>
				</div>
				<div className="button_2 ml-4 mr-4 mt-5">
					<button
						type="button"
						className="btn  btn-lg btn-block text-left"
						Style="color: #4c9954; background-color: #8bed96;"
					>
						Egresos{' '}
						<span className="egresos" Style="padding-left: 147px;">
							<span
								className="btn btn-outline-dark font-weight-bolder "
								Style="background-color: #8bed96; border: none; color:  #4c9954; padding-right: 18px;"
							>
								<Link
									to="/calculadoregresos"
									Style="color: #4c9954"
								>
									+
								</Link>
							</span>
						</span>
						<div className="ingresos-button"></div>
					</button>
				</div>
				<div></div>
				<div className="position-cal">
					<button
						onClick={() => {
							const fetchData = async () => {
								const abortController = new AbortController();
								// setCargando(true);
								const { err, res } = await http_call(
									'/usuarios/operaciones-mes/ultimo',
									'GET',
									undefined,
									{ Authorization: obtenerToken() },
									abortController,
								);
								if (
									!err &&
									!(res === null || res?.statusError)
								) {
									setIngresos(res.data.ingresos);
									setEgresos(res.data.ingresos);
									const balance =
										res.data.ingresos.reduce(
											(acc, ingreso) =>
												acc + parseFloat(ingreso.valor),
											0,
										) -
										res.data.egresos.reduce(
											(acc, egreso) => acc + parseFloat(egreso.valor),
											0,
										);
									setBalance(balance);
								} else {
									alert(
										'Ocurrió un error obteniendo tu balance, intentalo más tarde!',
									);
								}

								setAviso(true);
							};
							fetchData();
						}}
						type="button"
						className="btn btn-lg active btn-block rounded-pill text-white"
					>
						Calcular
					</button>
				</div>
			</div>
		</div>
	);
};
export default Calculador;
