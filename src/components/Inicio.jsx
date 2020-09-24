import React from "react";
import NavBar from "./Navbar";
import "./Inicio.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <Router>
      <Switch>
        <Route path="/inicio_sesion">
          <div className="inicio">
            <NavBar />
            <div className="container">
              <div className="titulo ">
                <h1>Iniciar sesión</h1>
              </div>
              <div className="entrada">
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario o número*"
                  ></input>
                </div>
                <div className="entrada2 mt-5">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contraseña*"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="campos">
                <p className="font-weight-light">
                  Los campos (*) son obligatorios
          </p>
              </div>
              <div className="position">
                <button
                  type="btn"
                  className="btn btn-lg active btn-block mt-5 rounded-pill"
                >
                  <Link className="text-white" to="/bienvenido">
                    Iniciar
                </Link>
                </button>
              </div>
            </div>
          </div>
          
        </Route>
      </Switch>

    </Router>


  );
};

export default Inicio;
