import db from '../../../db/firebase-config.js';

import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Container, Skeleton } from '@mui/material';
import ButtonAddCart from '../ButtonAddCart';
import styles from './itemdetailcontainer.module.css';
import ItemQuantitySelector from '../ItemQuantitySelector';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [cantidad, setCantidad] = useState(1);
    const [product, setProduct] = useState({});
    const [lodaing, setLoading] = useState(true);
    //Se busca el producto en la base de datos, según el id:

    const getItemWId = async (id) =>{
        const docRef = doc(db,"items",id);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists())
            setProduct({...docSnap.data(), id: docSnap.id});
        else
            return setProduct(null);
    }

    useEffect(()=>{
        getItemWId(id).then(()=> setLoading(false));
    }, [id])    

    if(lodaing){
        return (
            <Container maxWidth="lg" className={styles.container}>
                <div className={styles.container_desc}>
                <Skeleton variant='rectangular' className={styles.img} height={400}/>
                <div className={styles.container_desc_data}>
                    <Skeleton variant='text' width={200}/>
                    <Skeleton variant='text' width={200}/>
                    <Skeleton variant='rectangular' className={styles.descriptionParagraph}/>
                    <div className={styles.buttonContainer}>
                        <Skeleton variant='rectangular'/>
                        <Skeleton variant='rectangular'/>                     
                    </div>                    
                </div>
            </div>
            </Container>
        )
    }

    if(product == null){
        return <Navigate to="/404"></Navigate>
    }

    return (
        <Container maxWidth="lg" className={styles.container}>
            <div className={styles.container_desc}>
                <img src={product.img} alt={product.nombre} className={styles.img} />
                <div className={styles.container_desc_data}>
                    <h2>{product.nombre}</h2>
                    <p className={styles.priceTag}>{`$${product.precio}`} </p>
                    <p className={styles.descriptionParagraph}>{product.descripcion}</p>
                    <div className={styles.buttonContainer}>
                        <ItemQuantitySelector count={cantidad} setCount={setCantidad}/>
                        <ButtonAddCart producto={product} cantidad={cantidad}/>                        
                    </div>                    
                </div>
            </div>
            <div className={styles.container_addInfo}>
                <h2>Conoce más sobre el juego</h2>
                <iframe src={product.youtubeLink} title={product.nombre} className={styles.youtubeVideo}></iframe>
            </div>
        </Container>
    )
}

export default ItemDetailContainer