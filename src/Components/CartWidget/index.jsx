import React, { useContext } from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../contexts/Cart/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart, addToCart, cantItems } = useContext(CartContext);
  const cantidad = cart.reduce((ac, item) => ac + item.cantidad, 0);

  return (
    <Link to="/cart"> 
      <IconButton aria-label="cart">
        <Badge badgeContent={cantidad} color="error">
          <ShoppingCartIcon sx={{ color: '#3e3681ff' }} />
        </Badge>
      </IconButton>
    </Link>
  )
}

export default CartWidget