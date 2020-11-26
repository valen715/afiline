// Siempre usar kebab-case para links, CORREGIDO
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from '../screens/Inicio';
import Registro from '../screens/Registro';
import Bienvenido from '../screens/Bienvenido';
import App from '../App.js';
import Calculador from '../screens/Calculador';
import CalculadorEgresos from '../screens/CalculadorEgresos';
import CalculadorIngresos from '../screens/CalculadorIngresos';
import Ayuda from '../screens/Ayuda';
import Consejos from '../screens/Consejos';
import PagPrincipal from '../screens/PagPrincipal';
import Estadisticas from '../screens/Estadisticas';
import PrivateRoute from '../components/PrivateRoute';

function Aplicacion() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/inicio" component={Inicio} />
				<Route exact path="/registro" component={Registro} />
				<PrivateRoute exact path="/bienvenido" component={Bienvenido} />
				<PrivateRoute exact path="/calculador" component={Calculador} />
				<PrivateRoute
					exact
					path="/calculadoregresos"
					component={CalculadorEgresos}
				/>
				<PrivateRoute
					exact
					path="/calculadoringresos"
					component={CalculadorIngresos}
				/>
				<PrivateRoute exact path="/ayuda" component={Ayuda} />
				<PrivateRoute exact path="/consejos" component={Consejos} />
				<PrivateRoute
					exact
					path="/pag-principal"
					component={PagPrincipal}
				/>
				<PrivateRoute
					exact
					path="/estadisticas"
					component={Estadisticas}
				/>
			</Switch>
		</BrowserRouter>
	);
}
export default Aplicacion;
