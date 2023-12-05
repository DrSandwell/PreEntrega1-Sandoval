import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./productDetail.css";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductDetail = ({producto}) => {

    const [quantity, setQuantity] = useState(0)
    const {addToCart}= useContext(CartContext)

    

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addToCart(producto,cantidad)
    }
    return (
        <div className='detalle'>
            <img src={producto.imgUrl} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>PRECIO: ${producto.price}</p>
            <p>STOCK: {producto.stock}</p>
            <p>Descripcion: {producto.description}</p>
            <p>Juego: {producto.category}</p>
            {quantity==0 ?
            <ItemCount initial={1} stock={producto.stock} onAdd= {onAdd}/>
            :
            <Link to="/Cart">Ir al carrito</Link>}
        </div>
    );
};

export default ProductDetail;