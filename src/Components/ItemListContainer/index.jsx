import { Container } from '@mui/system';
import React from 'react';
import CardItem from '../CardItem';
import styles from './itemlistcontainer.module.css';

const ItemListContainer = ({productos}) => {
  return (
    <Container maxWidth='lg'>
      <ul className={styles.contenedor}>
            {
              productos.map((producto) => (
                <li className={styles.item}>
                  <CardItem key={producto.id} product={producto}/>
                </li>
                
              ))
            }
          </ul>
    </Container>
   
  )
}

export default ItemListContainer