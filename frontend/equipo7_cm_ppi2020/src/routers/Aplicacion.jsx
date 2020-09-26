import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../components/Inicio";
import Registro from "../components/Registro";
import Bienvenido from "../components/Bienvenido"
import App from '../App.js'

function Aplicacion(){
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App}/>
          <Route exact path="/inicio" component={Inicio}/>
          <Route exact path="/registro" component={Registro}/>
          <Route exact path="/bienvenido" component={Bienvenido}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Aplicacion;