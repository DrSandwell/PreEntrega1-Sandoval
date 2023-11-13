import React, { useState, useEffect } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductDetailContainer = ({ productId }) => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchData = () => {
            return fetch("/products.js")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    const foundProduct = data.find((item) => item.id == productId)
                    setProduct(foundProduct)

                })
                .catch((error) => console.log(error))
        }

        fetchData()
    }, [productId])
    return (
        <div>
            {
                product ? <ProductDetail producto = {product}/> : <p>CARGANDO...</p>
            }
        </div>
    );
};

export default ProductDetailContainer;