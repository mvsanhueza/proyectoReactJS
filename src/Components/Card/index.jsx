import React from 'react'

const Card = ({product}) => {
  return (
    <div>
        <img src={product.img} alt=""/>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button>
            <p>Añadir al carrito</p>
        </button>
    </div>  
  )
}

export default Card