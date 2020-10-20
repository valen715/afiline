import React from "react";
import './Calculador.css'
import {Link} from 'react-router-dom';

export const Calculador = () => {
    return (
        <div className="calculador1">
            <div className="container">
                <h1 className="text-center mt-5 ">Calculador</h1>
                <div className="button_1 ml-4 mr-4">
                    <button type="button" className="btn  btn-lg btn-block text-left" Style="color: #4c9954; background-color: #8bed96;">Ingresos<span className="ingresos"><button
          type="button"
          className="btn btn-outline-dark font-weight-bolder " Style="background-color: #8bed96; border: none;; padding-right: 18px;">
            <Link to="/calculadoringresos" Style="color: #4c9954; padding-left: 147px;">
            +
            </Link>
        </button></span><div className="ingresos-button">
                     
                    </div></button>
                </div>
                <div className="button_2 ml-4 mr-4 mt-5">
                    <button type="button" className="btn  btn-lg btn-block text-left" Style="color: #4c9954; background-color: #8bed96;">Egresos <span className="egresos" Style="padding-left: 147px;"><button
          type="button"
          className="btn btn-outline-dark font-weight-bolder " Style="background-color: #8bed96; border: none; color:  #4c9954; padding-right: 18px;">
            <Link to="/calculadoregresos" Style="color: #4c9954">
            +
            </Link>
        </button></span><div className="ingresos-button">
                        
                    </div>
                    </button>
                </div>
                <div>
                </div>
                <div className="position-cal">
          <button
            type="btn"
            className="btn btn-lg active btn-block rounded-pill text-white"
          >
            <Link to="/calculador1" className="text-white">
            Calcular
            </Link>

          </button>
          </div>
            </div>
        </div>
    )
}
export default Calculador;