import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import ButtonAddCart from '../ButtonAddCart';
import styles from './itemdetailcontainer.module.css';

const ItemDetailContainer = ({products}) => {

    const {id} = useParams();
    const product = products.find((product) => product.id == id)

  return (
    <Container maxWidth="lg" className={styles.container}>
        <div className={styles.container_desc}>
            <img src={product.img} alt={product.nombre} className={styles.img}/>
            <div className={styles.container_desc_data}>
                <h2>{product.nombre}</h2>
                <p className={styles.priceTag}>{`$${product.precio}`} </p>
                <p className={styles.descriptionParagraph}>{product.descripcion}</p>
                <div className={styles.buttonContainer}>
                    <ButtonAddCart/>
                </div>                
            </div>
        </div>

        <h2>Conoce más sobre el juego</h2>
        <iframe src={product.youtubeLink} title={product.nombre} className={styles.youtubeVideo}></iframe>        
    </Container>
  )
}

export default ItemDetailContainer