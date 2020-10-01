import React from "react";
import Navbar from "./Navbar";


export const Consejos = () => {
    return (
        <div className="pantalla_bienvenido">
            <Navbar titulo="Consejos"/>
            <div className="parrafo mt-5">
                <h1 >Lista de consejos </h1>
            </div>
            <div className="mt-4">
                
                    <ul>
                        <li>
                           No buscar calidades innecesarias 
                        </li>
                        <li>
                            Mantente prevenido antes lo cambios de tu situación económica
                        </li>
                        <li>
                            No compres artículos innecesarios
                        </li>
                        <li>
                            Establece metas de ahorro
                        </li>
                        <li>
                            Aprende a distinguir entre necesidades y deseos
                        </li>
                        <li>
                            Evita adquirir demasiados gastos
                        </li>
                        <li>
                            No sobrepases del monto de tus tarjetas
                        </li>
                        <li>
                            Encuentra la manera de recortar tus gastos
                        </li>
                        <li>
                            Decide cuales son tus prioridades
                        </li>
                        <li>
                            Manten un manejo adecuado de tus instalaciones eléctricas
                        </li>
                    </ul>
            
            </div>

        </div>
    );
};

export default Consejos;