import React, { useState, useEffect } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = ({ productId }) => {

    const [product, setProduct] = useState(null)

    const {idProduct} = useParams()

    useEffect(() => {
        const fetchData = () => {
            return fetch("/products.js")
                .then((response) => response.json())
                .then((data) => {                    
                    const foundProduct = data.find((item) => item.id == idProduct)
                    setProduct(foundProduct)

                })
                .catch((error) => console.log(error))
        }

        fetchData()
    }, [idProduct])
    return (
        <div>
            {
                product ? <ProductDetail producto = {product}/> : <p>CARGANDO...</p>
            }
        </div>
    );
};

export default ProductDetailContainer;