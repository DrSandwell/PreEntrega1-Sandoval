import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';

const ProductosListContainer = () => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        const promiseData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const productosFile = "/products.js"

                    fetch(productosFile).
                        then((response) => response.json())
                        .then((data) => {
                            resolve(data)
                        })
                }, 2000)
            })
        }

        promiseData().then((data) => {
            setProductData(data)
        })
    }, [])
    return (
        <div>
            {productData.length == 0 ?
                <p>Cargando...</p>
                : productData.map((product) => {
                    return(
                        <ProductList key={product.id} product={product}/>
                    )
                })
            }

        </div>
    );
};

export default ProductosListContainer;