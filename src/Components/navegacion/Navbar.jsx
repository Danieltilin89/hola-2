import React from "react";
import { Link } from "react-router-dom";
import './Form.css/Nav-estilos.css'
import logo from '../assets/Labores-removebg-preview.png';

export const Navbar = () => {
  return (
    <div>
      <header>
          <h2>
            <Link to="/Inicio"><img src={logo} alt="" className='logo' />Labores</Link>
          </h2>
        <nav className="navbar">
          <Link aria-current="page" to="/Formulario">Mision</Link>
          <Link to="/Crear">Registrate</Link>
          <Link to="/Items">Contacto</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
