import React, { createContext, useState } from 'react';
export const CartContext = createContext()



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total,setTotal]= useState (0)
    const [cantidadTotal,setCantidadTotal] = useState(0)

    const addToCart = (producto, cantidad) => {
        if (!isInCart(producto.id)) {
            setCart((prev) => [...prev, { producto, cantidad }])
            setCantidadTotal(prev=>prev+cantidad)
            setTotal(prev=>prev+(producto.precio*cantidad))

        } else {
            const cartActualizado = cart.map(prod => {
                if (prod.id == producto.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                }else{
                    return prod;
                }
            })
            setCart(cartActualizado)
            setCantidadTotal(prev=>prev+cantidad)
            setTotal(prev=>prev+(producto.precio*cantidad))
        }
    }

    const isInCart = (itemId) => {
        return cart.some((i) => i.producto.id === itemId)
    }
    const getTotalItems = () => {
        let cant = 0
        cart.forEach((e) => cant += e.cantidad)
        return cant
    }

    const removeItem = (id) => {
        const filtrarCarrito = cart.filter((item) => item.producto.id !== id)
        setCart(filtrarCarrito)
    }
    const clearCart = () => {
        setCart([])

    }

    const getQuantity = () => {

    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                isInCart,
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