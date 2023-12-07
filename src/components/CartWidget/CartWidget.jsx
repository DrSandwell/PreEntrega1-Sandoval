import React,  { useContext } from 'react';
import {BiCartDownload} from "react-icons/bi";
import "./cartWidget.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const{cantidadTotal}= useContext(CartContext)

    return (
        <div>
            <Link to="/cart"> 
            <BiCartDownload/>
            </Link> 
            <div>{cantidadTotal}</div>
        </div>
    );
};

export default CartWidget;