import React from "react";
import "./Registro.css";
import Navbar from "./Navbar";
import Registroimg from "./registro.png";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="registro">
      <Navbar titulo="Registro" />
      <div className="titulo">
        <div className="text-center mt-2">
          <p>Crear perfil</p>
        </div>
      </div>
      <div className="img">
        <div className="text-center ">
          <img className="rounded-circle" src={Registroimg} alt="" srcSet="" />
        </div>
      </div>
      <div className="img-button">
        <button
          type="button"
          className="btn btn-outline-dark rounded-circle font-weight-bolder">
            +
        </button>
      </div>
      
      <div className="container">
        <p className="font_weight m-0 ml-1 mt-3">Nombre completo*</p>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Digite su nombre completo"
          ></input>
        </div>
        <p className="font_weight m-0 ml-1 mt-2">Ocupación*</p>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Digite su ocupación"
          ></input>
        </div>
        <p className="font_weight m-0 ml-1 mt-2">Número*</p>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Digite su número de celular"
          ></input>
        </div>
        <p className="font_weight m-0 ml-1 mt-2">Usuario*</p>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Digite su usuario"
          ></input>
        </div>
        <p className="font_weight m-0 ml-1 mt-2">Contraseña*</p>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Digite su contraseña"
          ></input>
        </div>
        <div className="campos">
          <p className="font-weight-light mt-5">
            Los campos (*) son obligatorios
          </p>
        </div>
        <div className="positioon">
          <button
            type="btn"
            className="btn btn-lg active btn-block rounded-pill text-white"
          >
             <Link to="/bienvenido" className="text-white">
            Crear
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
