import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ producto, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        const totalInCart = cart.reduce((total, item) => {
            if (item.producto.id === producto.id) {
                return total + item.cantidad;
            }
            return total;
        }, 0);
        const newStock = producto.stock - totalInCart;

        if (count > newStock) {
            setCount(newStock);
        }
    }, [cart, producto, count, initial]);

    const increment = () => {
        if (count < producto.stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        onAdd(count);
        setCount(initial);
    };

    return (
        <div>
            {producto.stock > 0 && count > 0 ? (
                <>
                    <button onClick={increment}>Incrementar</button>
                    <span>{count}</span>
                    <button onClick={decrement}>Decrementar</button>
                    <button onClick={addToCart}>Agregar al carrito</button>
                </>
            ) : (
                <p>No se pueden agregar mas productos</p>
            )}
        </div>
    );
};


export default ItemCount;