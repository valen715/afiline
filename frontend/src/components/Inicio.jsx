import React from "react";
import Navbar from "./Navbar";
import "./Inicio.css";
import { Link } from "react-router-dom";


export const Inicio = () => {
  return (

          <div className="inicio">
            <Navbar titulo="Inicio de sesión"/>
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
                <Link to="/bienvenido" className="text-white">
                Iniciar
                </Link>


                </button>
              </div>
            </div>
          </div>
          



  );
};

export default Inicio;
