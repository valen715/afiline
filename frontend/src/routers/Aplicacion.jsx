import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../components/Inicio";
import Registro from "../components/Registro";
import Bienvenido from "../components/Bienvenido"
import Consejos from "../components/Consejos"
import Ayuda from "../components/Ayuda"
import App from '../App.js'
import PagPrincipal from "../components/PagPrincipal"

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
          <Route exact path="/PagPrincipal" component={PagPrincipal}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Aplicacion;