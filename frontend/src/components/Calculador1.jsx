import React from "react";
import "./Calculador1.css";
import { Link } from "react-router-dom";

export const Calculador1 = () => {
  return (
    <div className="calculador">
      <div className="container">
        <h1 className="text-center mt-5 mb-5 ">Calculador</h1>
        <div className="table">
        <table class="egt text-center" Style="border-radius: 15px;">
          <tr>
              <h4 className="tc-cal">¡¡¡Aviso importante!!!</h4>
              <p>Sus egresos han sobrepasado la cantidad de sus ingresos con un valor $</p>
          </tr>
          <tr>
          <button type="button" className="cal-btn btn" Style="background-color: #82d78b;">
                <Link to="/pag_principal" Style="color: black;"> Ir a la página principal</Link></button>
            <div className="cal-btn1 btn" Style="background-color: #82d78b;"><Link to="/estadisticas" Style="color: black;">Ir a las estadísticas</Link></div>
          </tr>
        </table>
        </div>
        <div className="bdy">
        <div className="button_1 ml-4 mr-4">
          <button
            type="button"
            className="btn  btn-lg btn-block text-left"
            Style="color: #4c9954; background-color: #8bed96;"
          >
            Ingresos
            <span className="ingresos">
              <button
                type="button"
                className="btn btn-outline-dark font-weight-bolder "
                Style="background-color: #8bed96; border: none;; padding-right: 18px;"
              >
                <Link to="/calculadoringresos" Style="color: #4c9954;">
                  +
                </Link>
              </button>
            </span>
            <div className="ingresos-button"></div>
          </button>
        </div>
        <div className="button_2 ml-4 mr-4 mt-5">
          <button
            type="button"
            className="btn  btn-lg btn-block text-left"
            Style="color: #4c9954; background-color: #8bed96;"
          >
            Egresos{" "}
            <span className="egresos" Style="padding-left: 147px;">
              <button
                type="button"
                className="btn btn-outline-dark font-weight-bolder "
                Style="background-color: #8bed96; border: none; color:  #4c9954; padding-right: 18px;"
              >
                <Link to="/calculadoregresos" Style="color: #4c9954">
                  +
                </Link>
              </button>
            </span>
            <div className="ingresos-button"></div>
          </button>
        </div>
        <div></div>
        <div className="position-cal">
          <button
            type="btn"
            className="btn btn-lg active btn-block rounded-pill text-white"
          >
              <Link to="/estadisticas" className="text-white">
              Calcular
              </Link>
          </button>
        </div>
      </div>
        </div>
    </div>
  );
};
export default Calculador1;
