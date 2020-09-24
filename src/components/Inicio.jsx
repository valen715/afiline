import React from "react";
import NavBar from "./Navbar";
import "./Inicio.css";

export const Inicio = () => {
  return (
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
            className="btn btn-lg active btn-block rounded-pill text-white"
          >
            Iniciar
          </button>
        </div>
      </div>
    </div>

  );
};

export default Inicio;
