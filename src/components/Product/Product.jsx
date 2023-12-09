import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    const onAdd = (cantidad) => {
        addToCart(product, cantidad)
    }
    return (
        <>
            <div className='contenedor'>
                <Link to={`/detalle/${product.id}`}>
                    <img src={product.imgUrl} alt={product.name} />
                    <h1>{product.name}</h1>
                </Link>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <ItemCount initial={1} producto={product} onAdd={onAdd} />
        </>
    );
};

export default Product;