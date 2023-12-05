import React,  { useContext } from 'react';
import {BiCartDownload} from "react-icons/bi";
import "./cartWidget.css";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const{getTotalItems}= useContext(CartContext)

    return (
        <div>
            <BiCartDownload/>
            <div>{getTotalItems()}</div>
        </div>
    );
};

export default CartWidget;