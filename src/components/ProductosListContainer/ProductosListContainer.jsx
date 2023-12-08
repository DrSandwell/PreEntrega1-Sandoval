import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ProductosListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);

        const db = getFirestore()

        const misProductos = categoryId
            ? query(collection(db, "productos"), where("category", "==", categoryId))
            : collection(db, "productos")

        getDocs(misProductos)
        .then((res) => {
                const nuevosProductos = res.docs.map((doc) => {
                    const data= doc.data()
                    return{id: doc.id,...data}
                })
                setProducts(nuevosProductos)
            })
            .catch((error)=>console.log(error))
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>)
                : (
                    <ProductList products={products} />)
            }

        </div>
    );
};

export default ProductosListContainer;