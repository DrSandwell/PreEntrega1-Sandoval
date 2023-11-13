import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Product = ({product}) => {

    const onAdd = (quantity) => {
        console.log(quantity)
    }
    return (
        <>
            <div className='contenedor'>
                <img src={product.imgUrl} alt={product.name}/>
                <h1>{product.name}</h1>
                <p>Precio: {product.price}</p>
            </div>
            <ItemCount initial={1} stock={product.stock} onAdd= {onAdd}/>
        </>
    );
};

export default Product;