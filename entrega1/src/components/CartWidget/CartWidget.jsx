import React from 'react';
import {BiCartDownload} from "react-icons/bi";
import "./cartWidget.css";

const CartWidget = () => {
    return (
        <div>
            <BiCartDownload/>
            <div>0</div>
        </div>
    );
};

export default CartWidget;