import React from 'react';

const ProductList = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Stock: {product.stock}</p>

        </div>
    );
};

export default ProductList;