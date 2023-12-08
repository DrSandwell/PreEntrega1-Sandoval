import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from "react-router-dom";
import "./cart.css"

const Cart = () => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext)
    return (
        <div className="contenedor-cart">
            <h1>Tu Carrito</h1>
            <div>
                <ul className='contenido-cart'>
                    {
                        cart.length > 0 ? (
                            cart.map((item) => {
                                return <li key={item.producto.id}>
                                    <img src={item.producto.imgUrl} alt={item.producto.name} />
                                    <h1>{item.producto.name}</h1>
                                    <p>Precio individual: {item.producto.price}</p>
                                    <p>Stock: {item.producto.stock}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <p>Costo: {item.cantidad * item.producto.price}</p>
                                    <button onClick={() => removeItem(item.producto.id)}>Eliminar producto</button>
                                </li>
                            })
                        )
                            : (
                                <div className='cart-vaciar'>
                                    <h2>No hay productos agregados...</h2>
                                    <Link to={"/"}>Ir al inicio</Link>
                                </div>
                            )
                    }
                </ul>
            </div>
            {
                cart.length > 0 && (
                    <div className='cart-vaciar'>
                        <h2>Valor total del carrito: ${total}</h2>
                        <button onClick={clearCart}>VACIAR CARRITO</button>
                        <Link to={"/Checkout"}>TERMINAR COMPRA</Link>
                    </div>
                )
            }
        </div >
    );
};

export default Cart;