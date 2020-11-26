import React from 'react';
import './App.css';
import logoAfiline from './assets/LogoAfiline.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar titulo="Bienvenidos" Style="font-size: x-large;" />
			<div className="img-logo">
				<div className="col-md-6 mx-auto d-flex justify-content-center mt-5">
					<img
						src={logoAfiline}
						alt=""
						srcSet=""
						style={{width: "230px"}}
					/>
				</div>
			</div>
			<div className="container ">
				<button
					type="button"
					className="btn btn-lg btn-block rounded-pill mt-5"
				>
					<Link to="/inicio" className="text-white">
						Iniciar sesión
					</Link>
				</button>
				<button
					type="button"
					className="btn btn-lg active btn-block mt-5 rounded-pill"
				>
					<Link to="/registro" className="text-white">
						Crear una cuenta
					</Link>
				</button>
			</div>
		</div>
	);
}

export default App;
