import React from "react";
import Navbar from "./Navbar";


export const Estadisticas = () => {
    return (
        <div className="pantalla_bienvenido">
            <Navbar titulo="Ayuda"/>
            <div>
            <div className="container parrafo mt-4 ">
                <h1 > Ayuda </h1>
            </div>
            <div className ="container text-justify mt-4 ">
                <p>
                Es un servicio para personas con ingresos que se les dificulta planificar su dinero en sus necesidades o gastos, se llama "Afiline' es un aplicativo web que les enseñará a manejar su salario de forma más adecuada para que asi vayan creando poco a poco un hábito de ahorro a diferencia de distintos modo manuales los cuales no son totalmente efectivos.
                </p>

            </div>
          
        </div>
        </div>
    );
};

export default Estadisticas;