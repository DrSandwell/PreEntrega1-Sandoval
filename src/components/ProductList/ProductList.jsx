import React from 'react';
import Product from '../Product/Product';

const ProductList = ({products}) => {
    return (
        <>
            {products.map((products) => {
                    return(
                        <Product 
                        key={products.id} 
                        product={products}/>
                    )
                })
            }

        </>
    );
};

export default ProductList;