import React,  { useContext, useEffect, useState } from 'react';
import {BiCartDownload} from "react-icons/bi";
import "./cartWidget.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext);
    const [cartCount, setCartCount] = useState(cantidadTotal);

    useEffect(() => {
        setCartCount(cantidadTotal);
    }, [cantidadTotal]);

    return (
        <div>
            <Link to="/cart"> 
                <BiCartDownload />
            </Link> 
            <div>{cartCount}</div>
        </div>
    );
};

export default CartWidget;