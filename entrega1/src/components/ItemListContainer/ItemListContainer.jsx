import React from 'react'
import Count from '../Count/Count';
import "./itemListContainer.css";


const ItemListContainer = ({saludo}) => {
    return (
        <div className='itemList'>            
            <h2>{saludo}</h2>
            <Count initial={1} stock={10}/>
        </div>
    );
};

export default ItemListContainer;