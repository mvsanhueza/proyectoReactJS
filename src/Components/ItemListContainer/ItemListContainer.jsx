import React from 'react';
import "./itemListContainer.css";

const ItemListContainer = ({greeting}) => {
  return (
    <p className='Item'>
        {greeting}
    </p>
  )
}

export default ItemListContainer