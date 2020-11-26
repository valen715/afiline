import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Bienvenido.css';
import logoAfiline from '../assets/LogoAfiline.png';

export const Bienvenido = () => {
	return (
		<div className="pantalla_bienvenido">
			<div className="parrafo mt-5">
				<h1 className="h1-bienvenido">
					BIENVENIDO <br />A
				</h1>
			</div>
			<div className="img_logo">
				<div
					className="col-md-6 mx-auto d-flex justify-content-center "
					style={{ marginTop: '5rem' }}
				>
					<img
						src={logoAfiline}
						alt=""
						srcSet=""
						style={{ width: '300px' }}
					/>
				</div>
			</div>
			<div className="container">
				<div className="position_b">
					<button
						type="button"
						className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
					>
						<Link className="text-white" to="/pag-principal">
							Seguir
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Bienvenido;
