import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../components/Inicio";
import Registro from "../components/Registro";
import Bienvenido from "../components/Bienvenido"
import App from '../App.js'
import Calculador from '../components/Calculador';
import CalculadorEgresos from '../components/CalculadorEgresos';
import CalculadorIngresos from '../components/CalculadorIngresos';
import Ayuda from '../components/ayuda';
import Consejos from '../components/Consejos';
import PagPrincipal from '../components/PagPrincipal';
import Estadisticas from '../components/Estadisticas';
import Calculador1 from '../components/Calculador1';
function Aplicacion(){
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App}/>
          <Route exact path="/inicio" component={Inicio}/>
          <Route exact path="/registro" component={Registro}/>
          <Route exact path="/bienvenido" component={Bienvenido}/>
          <Route exact path="/calculador" component={Calculador}/>
          <Route exact path="/calculadoregresos" component={CalculadorEgresos}/>
          <Route exact path="/calculadoringresos" component={CalculadorIngresos}/>
          <Route exact path="/ayuda" component={Ayuda}/>
          <Route exact path="/consejos" component={Consejos}/>
          <Route exact path="/pag_principal" component={PagPrincipal}/>
          <Route exact path="/estadisticas" component={Estadisticas}/>
          <Route exact path="/calculador1" component={Calculador1}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Aplicacion;