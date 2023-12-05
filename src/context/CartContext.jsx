import React, { createContext, useState } from 'react';
export const CartContext = createContext()



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (producto, cantidad) => {
        if (!isInCart(producto.id)) {
            setCart((prev)=>[...prev,{producto,cantidad}])

        } else {
            console.log("No se puede agregar mas")
        }
    }

    const isInCart = (itemId) => {
        return cart.some((i) => i.producto.id === itemId)
    }
    const getTotalItems = () => {
        let cant=0
        cart.forEach((e)=> cant+= e.cantidad)
        return cant
    }

    const removeItem = () => {

    }
    const clearCart = () => {

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
                clearCart
            }
        }>
            {children}

        </CartContext.Provider>
    );
};