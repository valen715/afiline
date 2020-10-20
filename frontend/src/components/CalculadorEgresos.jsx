import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./CalculadorEgresos.css";


export const CalculadorEgresos = () => {
    return (
        <div className="pantalla_bienvenido">
            <Navbar titulo="Egresos"/>
            <div>
            <div className="titulo container">
              <div className="titulo mt-5 ">
                <h1 className="text-center">Digitar egresos</h1>
              </div>
              <div className="texto container entrada " Style="margin-top:7rem;">
                <div className="input-group mb-1 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del egreso"
                  ></input>
                </div>
                <div className="entrada2 mt-1">
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite egreso"
                    ></input>
                  </div>
                  <div className="entrada2 mt-1">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fecha en que paga el egreso"
                    ></input>
                  </div>
                  </div>
                  <div className="entrada mt-5">
                <div className="input-group mb-1 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del egreso"
                  ></input>
                </div>
                <div className="entrada2 mt-1">
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite egreso"
                    ></input>
                  </div>
                  <div className="entrada2 mt-1">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fecha en que paga el egreso"
                    ></input>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="btn_malucoo">
              <button
          type="button"
          className="btn btn-outline-dark rounded-circle font-weight-bolder mr-1" Style ="margin-top:0rem; background-color: transparent;">
            +
        </button>
        <button
          type="button"
          className="btn btn-outline-dark rounded-circle font-weight-bolder mr-1 " Style ="margin-top:0rem; background-color: transparent; padding-right: 15px; padding-left: 15px;">
            -
        </button>
        <button
          type="button"
          className="btn-slash btn btn-outline-dark rounded-circle font-weight-bolder" Style ="margin-top:0rem; background-color: transparent;">
            /
        </button>
              </div>
              <div className="container" >
            <div className="position_e" >
                <button type="btn" id="prueba"
                  className="btn btn-lg active rounded-pill text-white" Style ="margin-left: 12rem; margin-top: 8.5rem;"
                > 
                
              <Link to="/calculador" className="text-white">
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



export default CalculadorEgresos;