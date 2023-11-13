import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';

const ProductosListContainer = () => {

    const [productData, setProductData] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const promiseData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const productosFile = "/products.js"

                    fetch(productosFile).
                        then((response) => response.json())
                        .then((data) => {
                            if (categoryId) {
                                const filterProducts = data.filter(p => p.category == categoryId)
                                setProductData(filterProducts)
                            } else {
                                resolve(data)
                            }

                        })
                }, 1000)
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
                :
                <ProductList products={productData} />
            }

        </div>
    );
};

export default ProductosListContainer;