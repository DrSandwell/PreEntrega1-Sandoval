import React, { createContext, useState } from 'react';
export const CartContext = createContext()



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const addToCart = (producto, cantidad) => {
        const productoExistente= cart.find(prod=> prod.producto.id==producto.id)
        if (!productoExistente) {
            setCart(prev => [...prev, { producto, cantidad }])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (producto.price * cantidad))

        } else {
            const cartActualizado = cart.map(prod => {
                if (prod.producto.id === producto.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod;
                }
            })
            setCart(cartActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (producto.price * cantidad))
        }
    }

    const getTotalItems = () => {
        let cant = 0
        cart.forEach((e) => cant += e.cantidad)
        return cant
    }

    const removeItem = (id) => {
        const productoEliminado = cart.find(prod => prod.producto.id === id)
        const filtrarCarrito = cart.filter((item) => item.producto.id !== id)

        setCart(filtrarCarrito);
        const nuevaCantidadTotal = filtrarCarrito.reduce((total, item) => total + item.cantidad, 0);
        setCantidadTotal(nuevaCantidadTotal);
        setTotal(prev => prev - (productoEliminado.producto.price * productoEliminado.cantidad));
    }
    const clearCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,                
                getTotalItems,
                removeItem,
                clearCart,
                total,
                cantidadTotal
            }
        }>
            {children}

        </CartContext.Provider>
    );
};