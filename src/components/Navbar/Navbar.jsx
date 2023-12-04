import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const enlaces = [
        "contacto",
        "ubicacion",
        "about-me"
    ]
    const category = [        
        "MarioBross",
        "LeagueofLegends",
        "Bayonetta",
        "TheKingofFighters",
        "AssassinsCreed"
    ]

    return (
        <nav>
            <Link to={`/`}>
                <img src="/img/peach-logo.png" alt="Logo" />
                <h1>E-Commerce Sandwell</h1>
            </Link>

            <ul>
                <li>
                    <CartWidget />
                </li>
                <div className="dropdown">
                    <button>Categorias▼</button>
                    <div className="content">
                        {category.map((e, id) =>
                            <li key={id}>
                                <Link to={`${e}`}>
                                    {e}
                                </Link>
                            </li>
                        )}
                    </div>
                </div>

                {enlaces.map((e, id) =>
                    <li key={id}>
                        <Link to={`${e}`}>
                            {e}
                        </Link>
                    </li>
                )}              


            </ul>
        </nav >
    );
};

export default Navbar;