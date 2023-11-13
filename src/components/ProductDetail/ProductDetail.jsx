import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./productDetail.css";

const ProductDetail = ({producto}) => {

    const onAdd = (quantity) => {
        console.log(quantity)
    }
    return (
        <div className='detalle'>
            <img src={producto.imgUrl} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>PRECIO: ${producto.price}</p>
            <p>STOCK: {producto.stock}</p>
            <p>Descripcion: {producto.description}</p>
            <p>Juego: {producto.category}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd= {onAdd}/>
        </div>
    );
};

export default ProductDetail;