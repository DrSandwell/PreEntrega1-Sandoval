import React from 'react';
import Product from '../Product/Product';
import "./productList.css";

const ProductList = ({products}) => {
    return (
        <div className='productos'>
            {products.map((products) => {
                    return(
                        <Product 
                        key={products.id} 
                        product={products}/>
                    )
                })
            }

        </div>
    );
};

export default ProductList;