import React, { Fragment } from "react";
import "./Navbar.css";

class Navbar extends React.Component{
  render() {
   return (
        <Fragment>
          <div className="nav_bar navbar">
          <div className="container-fluid navbar_brand text-white" bg="navbar">
            <header titutlo="" className="App-header ">
            <a className="header_registro text-white" href="/">
               {this.props.titulo}
              </a>
            </header>
          </div>
        </div>
        </Fragment>
        
   );
   };
};

export default Navbar;
