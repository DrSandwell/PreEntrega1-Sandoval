import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';

const ProductosListContainer = () => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const fetchData = () => {
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
        }
        fetchData()
    }, [categoryId])
    return (
        <div>
            {products.length == 0 ?
                <p>Cargando...</p>
                :
                <ProductList products={products} />
            }

        </div>
    );
};

export default ProductosListContainer;