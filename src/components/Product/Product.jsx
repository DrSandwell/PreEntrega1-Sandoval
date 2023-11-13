import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const onAdd = (quantity) => {
        console.log(quantity)
    }
    return (
        <>
            <div className='contenedor'>
                <Link to={`/detalle/${product.id}`}>
                    <img src={product.imgUrl} alt={product.name} />
                    <h1>{product.name}</h1>
                </Link>
                <p>Precio: {product.price}</p>
            </div>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        </>
    );
};

export default Product;