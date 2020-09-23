import React from "react";
import "./App.css";
import logoAfiline from "./components/LogoAfiline.png";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Registro from "./components/Registro";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <NavBar />
            <div className="img-logo">
              <div className="col-md-6 mx-auto d-flex justify-content-center mt-5">
                <img src={logoAfiline} alt="" srcSet="" />
              </div>
            </div>
            <div className="container">
              <button
                type="btn"
                className="btn btn-lg btn-block rounded-pill mt-5"
              >
                <Link className="text-white " to="/inicio_sesion">
                  Iniciar sesión
                </Link>
              </button>
              <button
                type="btn"
                className="btn btn-lg active btn-block mt-5 rounded-pill"
              >
                <Link className="text-white" to="/registro">
                  Crear una cuenta
                </Link>
              </button>
            </div>
          </div>
        </Route>
        <Route path="/inicio_sesion">
          <Inicio />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
