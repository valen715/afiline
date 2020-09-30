import React from "react";
import "./Bienvenido.css";
import logoAfiline from "./LogoAfiline.png";

export const Bienvenido = () => {
    return (
        <div className="pantalla_bienvenido">
            <div className="parrafo mt-5">
                <h1 >BIENVENIDO <br />A</h1>
            </div>
            <div className="img_logo">
                <div className="col-md-6 mt-5 mx-auto d-flex justify-content-center " >
                    <img src={logoAfiline} alt="" srcSet="" Style="width: 300px " />
                </div>
            </div>
            <div className="container">
            <div className="position_b">
                <button
                  type="btn"
                  className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
                >
                    Iniciar
                </button>
              </div>
            </div>
            

        </div>
    );
};

export default Bienvenido;