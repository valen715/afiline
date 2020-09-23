import React, { Fragment } from "react";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav_bar">
      <Fragment>
        <Navbar bg="navbar">
          <Navbar.Brand className="navbar_brand">Bienvenidos</Navbar.Brand>
        </Navbar>
      </Fragment>
    </div>
  );
};

export default NavBar;
