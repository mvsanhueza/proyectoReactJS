import { Button, Container, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/Cart/CartContext'
import { CartItem } from '../CartItem';
import styles from './cart.module.css'
import { RemoveShoppingCart } from '@mui/icons-material';

export const Cart = () => {

  const { cart, addToCart, cantItems, removeFromCart, precioTotal, clearCart } = useContext(CartContext);

  if (cantItems == 0) {
    return (
      <div className={styles.container}>
        <h2>No hay productos en el carrito</h2>
      </div>
    )
  }

  const handleClearCart = () =>{
    clearCart();
  }

  const priceVal = Intl.NumberFormat('de-DE');
  return (
    <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'column'}}>
      <div className={styles.containerFirst}>
        <IconButton onClick={handleClearCart}>
          <RemoveShoppingCart color='error'/>
        </IconButton>
      </div>      
      <ul className={styles.container}>
        {cart.map((item) => (
          <li className={styles.item} key={item.producto.id}>
            <CartItem key={item.producto.id} item={item} />
          </li>
        ))}
      </ul>
      <div className={styles.container_total}>
        <Button variant="contained" size='medium' sx={{ background: '#f68a7fff', ":hover": { background: '#f68a7fff' }, height: '50px'}}>
              Comprar
        </Button>
        <p className={styles.totalText}>Total: ${priceVal.format(precioTotal)}</p>
      </div>
    </Container>
  )
}
