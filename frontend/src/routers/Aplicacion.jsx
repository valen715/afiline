import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../components/Inicio";
import Registro from "../components/Registro";
import Bienvenido from "../components/Bienvenido"
import Consejos from "../components/Consejos"
import Ayuda from "../components/Ayuda"
import CalculadorEgresos from "../components/CalculadorEgresos"
import CalculadorIngresos from "../components/CalculadorIngresos"
import Estadisticas from "../components/Estadisticas"
import App from '../App.js'

function Aplicacion(){
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App}/>
          <Route exact path="/inicio" component={Inicio}/>
          <Route exact path="/registro" component={Registro}/>
          <Route exact path="/bienvenido" component={Bienvenido}/>
          <Route exact path="/consejos" component={Consejos}/>
          <Route exact path="/ayuda" component={Ayuda}/>
          <Route exact path="/calculadoregresos" component={CalculadorEgresos}/>
          <Route exact path="/calculadoringresos" component={CalculadorIngresos}/>
          <Route exact path="/estadisticas" component={Estadisticas}/>

        </Switch>
        </BrowserRouter>
    )
}
export default Aplicacion;