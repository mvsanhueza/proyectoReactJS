import { Button, Container, IconButton, TextField } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import { CartContext } from '../../contexts/Cart/CartContext'
import { CartItem } from '../CartItem';
import styles from './cart.module.css'
import { RemoveShoppingCart } from '@mui/icons-material';
import db from '../../../db/firebase-config.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export const Cart = () => {

  const { cart, addToCart, cantItems, removeFromCart, precioTotal, clearCart } = useContext(CartContext);

  const [checkout, setCheckout] = useState(false)
  const [orderSend, setOrderSend] = useState(false)
  const [email, setEmail] = useState('')

  const [checkEmail, setCheckEmail] = useState(true)
  const [Order, setOrder] = useState({})

  //Referencias para los inputs del formulario:
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const telefonoRef = useRef();
  const emailRef = useRef();


  //Variables de la base de datos de ordenes:
  const ordersCollectionRef = collection(db, 'orders');

  if (orderSend) {
    return (
      <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column' }}>
        <div className={orderSend ? styles.containerOrder : styles.formDisable}>
          <h2>Su compra se ha realizado con éxito !</h2>
          <p>Estimado/a {Order.nombre} {Order.apellido}, su compra se ha realizado con éxito. En breve recibirá un email a la dirección {Order.email} con la confirmación de sus productos. El número de pedido es el siguiente:</p>
          <p>{Order.id}</p>
        </div>
      </Container>

    )
  }

  if (cantItems == 0) {
    return (
      <div className={styles.container}>
        <h2>No hay productos en el carrito</h2>
      </div>
    )
  }

  //OnChange para email:
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  //OnChange para confirmar email:
  const handleEmailCheck = (e) => {
    if (email == "") {
      setCheckEmail(true);
      return;
    }

    if (e.target.value == email) {
      setCheckEmail(true);
    }
    else {
      setCheckEmail(false);
    }
  }

  const handleClearCart = () => {
    clearCart();
  }

  //Boton para realizara el checkout:
  const handleCheckout = () => {
    setCheckout(true)
  }

  //Boton para cancelar el checkout:
  const handleCancelCheckout = () => {
    setCheckout(false)
  }

  //Boton para generar la orden:
  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (!checkEmail) {
      return;
    }

    //Se crea la orden:
    const newOrder = {
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      telefono: telefonoRef.current.value,
      email: emailRef.current.value,
      items: cart,
      total: precioTotal,
      fecha: (new Date()).toLocaleString(),
      estado: 'generada',
    }
    //Se agrega la orden a la base de datos:
    addDoc(ordersCollectionRef, newOrder).then(
      () => {
        //Se identifica el id de la orden generada:
        getIdOrder(newOrder);

      }
    )
  }

  const getIdOrder = async (newOrder) => {
    const ordersCollection = await getDocs(ordersCollectionRef);
    const idOrder = ordersCollection.docs.find(doc => doc.data().fecha == newOrder.fecha && doc.data().nombre == newOrder.nombre).id;
    setOrder({ ...newOrder, id: idOrder });
    setOrderSend(true);
    clearCart();
  }



  const priceVal = Intl.NumberFormat('de-DE');
  return (
    <div>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.containerFirst}>
          <IconButton onClick={handleClearCart}>
            <RemoveShoppingCart color='error' />
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
          <Button variant="contained" size='medium' sx={{ background: '#f68a7fff', ":hover": { background: '#f68a7fff' }, height: '50px' }} onClick={handleCheckout}>
            Comprar
          </Button>
          <p className={styles.totalText}>Total: ${priceVal.format(precioTotal)}</p>
        </div>
      </Container>
      <div className={checkout ? styles.containerForm : styles.formDisable}>
        <form className={styles.form}>
          <p>¡Estás muy cerca de la entretención!</p>
          <TextField required id="outlined-required" label="Nombre" variant="outlined" inputRef={nombreRef} />
          <TextField required id="outlined-required" label="Apellido" variant="outlined" inputRef={apellidoRef} />
          <TextField required id="outlined-required" type='number' label="Teléfono" inputRef={telefonoRef} />
          <TextField required id="outlined-required" label="Email" variant="outlined" type='email' onChange={handleEmailChange} inputRef={emailRef} />
          <TextField required id="outlined-required" label="Confirmar Email" variant="outlined" type='email' onChange={handleEmailCheck} error={!checkEmail} helperText={checkEmail ? "" : "Email no coincide"} />
          <div className={styles.ButtonsContainer}>
            <Button variant="contained" size='medium' sx={{ background: '#f68a7fff', ":hover": { background: '#f68a7fff' }, height: '30px', width: '90px' }} onClick={handleCancelCheckout}>
              Cancelar
            </Button>
            <Button variant="contained" size='medium' sx={{ background: '#f68a7fff', ":hover": { background: '#f68a7fff' }, height: '30px', width: '90px' }} type='submit' onClick={handleCreateOrder}>
              Comprar
            </Button>
          </div>
        </form>
      </div>
    </div>

  )
}
