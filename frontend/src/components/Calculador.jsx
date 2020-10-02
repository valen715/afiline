import React from "react";
import './Calculador.css'


export const Calculador = () => {
    return (
        <div className="calculador">
            <div className="container">
                <h1 className="text-center mt-1 ">Calculador</h1>
                <div className="button_1 ml-4 mr-4">
                    <button type="button" className="btn  btn-lg btn-block text-left" Style="color: #4c9954; background-color: #8bed96;">Ingresos<div className="ingresos-button">
                     
                    </div></button>
                </div>
                <div className="button_2 ml-4 mr-4 mt-5">
                    <button type="button" className="btn  btn-lg btn-block text-left" Style="color: #4c9954; background-color: #8bed96;">Egresos <div className="ingresos-button">
                        
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

            Calcular

          </button>
          </div>
            </div>
        </div>
    )
}
export default Calculador;