import React from 'react';
import '../styles/PagPrincipal.css';
import calculador from '../assets/Calculador.png';
import estadisticas from '../assets/Estadisticas.png';
import consejos from '../assets/Consejos.png';
import ayuda from '../assets/Ayuda.png';
import registro from '../assets/registro.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { obtenerUsuario } from '../utils/connection_utils';

export const PagPrincipal = () => {
	const [usuario,] = useState(obtenerUsuario()); 
	return (
		<div className="container">
			<div>
				<div className="imagen_registro">
					<img
						className="rounded-circle mt-3"
						Style="width:80px; height:80px; margin-left:17rem"
						src={registro}
						alt=""
						srcSet=""
					/>
				</div>
				<div className="Usuario">
					<h2 Style="margin-left: 10rem; margin-top: -4rem; ">
						Usuario
					</h2>
				</div>
				<div className="nombre">
					<h3 Style="margin-top: -1rem; font-size: 25px; color: gray;">
						{usuario?.nombre_completo || 'Nombre'}
					</h3>
				</div>
				<div className="buttons" Style="margin-top: 6rem;">
					<div className="btn-1-pg ">
						<button
							type="button"
							className="btn btn-lg active btn-block  rounded-pill text-white mt-4"
						>
							<img
								src={calculador}
								alt=""
								srcSet=""
								style={{ width: '60px', marginRight: '20%' }}
							/>
							<Link className="text-white" to="calculador">
								Calculador
							</Link>
						</button>
					</div>
					<div className="btn-2-pg">
						<button
							type="button"
							className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
						>
							<img
								src={estadisticas}
								alt=""
								srcSet=""
								style={{ width: '60px', marginRight: '20%' }}
							/>
							<Link to="/estadisticas" className="text-white">
								Estadísticas
							</Link>
						</button>
					</div>
					<div className="btn-3-pg">
						<button
							type="button"
							className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
						>
							<img
								src={consejos}
								alt=""
								srcSet=""
								Style="width: 60px; margin-right: 20%"
							/>
							<Link className="text-white" to="/consejos">
								Consejos
							</Link>
						</button>
					</div>
					<div className="btn-4-pg">
						<button
							type="button"
							className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
						>
							<img
								src={ayuda}
								alt=""
								srcSet=""
								Style="width: 60px; 
                    margin-right: 20%"
							/>
							<Link className="text-white" to="/ayuda">
								Ayuda
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PagPrincipal;
