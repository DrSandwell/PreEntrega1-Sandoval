import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {

    const enlaces = [
        "contacto",
        "ubicacion",
        "about-me",
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

                {enlaces.map((e, id) =>
                    <li key={id}>
                        <Link to={`${e}`}>
                            {e}
                        </Link>
                    </li>
                )}

            </ul>
        </nav>
    );
};

export default Navbar;