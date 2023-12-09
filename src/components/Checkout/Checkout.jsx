import React, { useState, useContext } from 'react';
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import "./checkout.css"

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { cart, total, clearCart } = useContext(CartContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar los campos requeridos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        const db = getFirestore()

        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.name,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        clearCart();
                    })
                    .catch((error) => {
                        console.log("Error al crear orden", error)
                        setError("Se produjo un error al crear la orden")
                    })
            })
            .catch((error) => {
                console.log("No se pudo actualizar stock", error)
                setError("No se puede actualizar el stock, inténtelo más tarde");
            })



    }

    return (
        <div className='container'>
            <h2>Ingresa tus datos</h2>

            <form onSubmit={manejadorFormulario}>

                {cart.map((item) => (
                    <div key={item.producto.id}>
                        <p>
                            {""}{item.producto.name}{""}
                        </p>
                        <p>{item.producto.price}x{item.cantidad}</p>
                        <hr/>
                    </div>
                ))
                }

                <div>
                    <label htmlFor=''>Nombre</label>
                    <input type='text' maxLength='15' onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Apellido</label>
                    <input type='text' maxLength='15' onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Telefono</label>
                    <input type='tel' maxLength="15" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' maxLength="20" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Email de confirmacion</label>
                    <input type='email' maxLength="20" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p className="error">{error}</p>}

                <button type='submit'>Comprar</button>
                {
                    ordenId && (
                        <p>
                            ¡Gracias por tu compra, lea BERSERK! Tu numero de ID es: {ordenId}
                        </p>
                    )
                }
            </form>
        </div>
    );
};

export default Checkout;