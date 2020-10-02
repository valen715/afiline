import React from "react";
import "../components/PagPrincipal.css"
import Calculador from "./Calculador.png"
import Estadisticas from "./Estadisticas.png"
import Consejos from "./Consejos.png"
import Ayuda from "./Ayuda.png"
import registro from "./registro.png"
import {Link} from 'react-router-dom'

export const PagPrincipal = () => {
    return (
        <div className="container">
            <div >
                <div className="imagen_registro">
                    <img className="rounded-circle" Style="width:80px; height:80px;" src={registro} alt="" srcSet="" />
                </div>
                <div className="Usuario" >
                    <h2 Style="margin-left: 10rem; margin-top: -4rem; " >Usuario</h2>
                </div>
                 <div className="nombre" >
                    <h3 Style="margin-left: 10rem; margin-top: -1rem; font-size: 25px; color: gray;">nombre</h3>
                </div> 
                <button
                    type="btn"
                    className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
                >
                    <img src={Calculador} alt="" srcSet="" Style="width: 60px; margin-right: 20%" />
                    <Link className="text-white" to="/calculador">
                    Calculador
                    </Link>
            
            </button>
                <button
                    type="btn"
                    className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
                >
                    <img src={Estadisticas} alt="" srcSet="" Style="width: 60px; margin-right: 20%" />
                    <Link className="text-white" to="">
                    Estadísticas
                    </Link>
            </button>
                <button
                    type="btn"
                    className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
                >
                    <img src={Consejos} alt="" srcSet="" Style="width: 60px; margin-right: 20%" />
                    <Link className="text-white" to="/consejos">
                    Consejos
                    </Link>
            </button>
                <button
                    type="btn"
                    className="btn btn-lg active btn-block mt-5 rounded-pill text-white"
                >
                    <img src={Ayuda} alt="" srcSet="" Style="width: 60px; margin-right: 30%" />
            Ayuda
            </button>
            </div>
        </div>
    )
}
export default PagPrincipal;
