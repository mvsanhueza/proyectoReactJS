import React from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="error">
        <ShoppingCartIcon sx={{ color: '#3e3681ff' }} />
      </Badge>
    </IconButton>
  )
}

export default CartWidget