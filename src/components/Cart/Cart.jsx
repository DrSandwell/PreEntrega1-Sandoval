import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Product from '../Product/Product';

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>Tu Carrito</h1>            
            <ul>
                {
                    cart.length>0 ? (
                    cart.map((item) => {
                            return <li>
                                <Product product={item.producto} />
                                <button onClick={()=>removeItem(item.producto.id)}>Eliminar producto</button>
                            </li>
                        })
                    )
                    : (
                        <h3>No hay productos agregados...</h3>
                    )
                }               
            </ul>
            <button onClick={clearCart}>VACIAR CARRITO</button>

        </div>
    );
};

export default Cart;