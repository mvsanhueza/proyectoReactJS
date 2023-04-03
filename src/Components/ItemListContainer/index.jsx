import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import React from 'react';
import CardItem from '../CardItem';
import styles from './itemlistcontainer.module.css';

const ItemListContainer = ({ products, categories }) => {

  const { id } = useParams();
  const category = categories.find((category) => category.nombre == id);

  if (category != undefined) {
    products = products.filter((product) => product.categoria == category.nombre);
  }

  return (
    <Container maxWidth='lg'>
      <ul className={styles.contenedor}>
        {
          products.map((producto) => (
            <CardItem key={producto.id} product={producto} />
          ))
        }
      </ul>
    </Container>

  )
}

export default ItemListContainer