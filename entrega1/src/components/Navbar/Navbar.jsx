import React from "react";
import "./navbar.css";

const Navbar = () => {

    return(
        <nav>             
            <h1>E-Commerce Sandwell</h1>           
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Sobre nosotros</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;