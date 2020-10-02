import React from "react";
import "./App.css";
import logoAfiline from "./components/LogoAfiline.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Navbar titulo="Bienvenidos" />
      <div className="img-logo">
        <div className="col-md-6 mx-auto d-flex justify-content-center mt-1">
          <img src={logoAfiline} alt="" srcSet="" Style="width: 260px;" />
        </div>
      </div>
      <div className="container">
          <button
            type="btn"
            className="btn btn-lg btn-block rounded-pill mt-2"
          >
            <Link to="/inicio" className="text-white">
              Iniciar sesión
                </Link>


          </button>
          <button
            type="btn"
            className="btn btn-lg active btn-block mt-2 rounded-pill"
          >
            <Link to="/registro" className="text-white">
              Crear una cuenta
               </Link>


          </button>
        </div>
      </div>
    

  );
}

export default App;