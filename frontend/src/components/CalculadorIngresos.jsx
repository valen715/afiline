import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./CalculadorIngresos.css";

export const CalculadorIngresos = () => {
    return (
        <div className="pantalla_bienvenido">
            <Navbar titulo="Ingresos"/>
            <div>
            <div className="container">
              <div className="titulo mt-5 ">
                <h1>Digitar Ingresos</h1>
              </div>
              <div className="texto container entrada " Style="margin-top:7rem;">
                <div className="input-group mb-1 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del ingreso"
                  ></input>
                </div>
                <div className="entrada2 mt-1">
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite ingreso"
                    ></input>
                  </div>
                  <div className="entrada2 mt-1">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fecha en que recibió el ingreso"
                    ></input>
                  </div>
                  </div>
                  <div className="entrada mt-5">
                <div className="input-group mb-1 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del ingreso"
                  ></input>
                </div>
                <div className="entrada2 mt-1">
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite ingreso"
                    ></input>
                  </div>
                  <div className="entrada2 mt-1">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fecha en que recibió el ingreso"
                    ></input>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
              <button
          type="button"
          className="btn btn-outline-dark rounded-circle font-weight-bolder" Style ="margin-top:8rem;">
            +
        </button>
        </div>
              <div className="container">
            <div className="position_b " Style="margin-top:0rem;">
              <div className="position">
                <button
                  type="btn"
                  className="btn btn-lg active mt-1 rounded-pill text-white"
                > 
           <Link to="/bienvenido" className="text-white">
                Terminar
                </Link>


                </button>
              </div>
              </div>
              </div>
              </div>
              </div>
           </div>
         
        
    );
};

export default CalculadorIngresos;