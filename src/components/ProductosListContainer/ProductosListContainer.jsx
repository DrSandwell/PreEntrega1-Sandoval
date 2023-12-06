import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';

const ProductosListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const fetchData = () => {
            setLoading(true)
            return fetch("/products.js")
                .then((response) => response.json())
                .then((data) => {
                    if (categoryId) {
                        const filterProducts = data.filter(p => p.category == categoryId)
                        setProducts(filterProducts)
                    } else {
                        setProducts(data)
                    }

                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
        setTimeout(() => fetchData(), 1000)
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