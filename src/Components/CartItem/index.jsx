import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material'
import styles from './cartitem.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { DeleteOutline } from '@mui/icons-material';
import ItemQuantitySelector from '../ItemQuantitySelector';
import { CartContext } from '../../contexts/Cart/CartContext';


export const CartItem = ({ item }) => {

    const {cart, addToCart, cantItems, removeFromCart} = useContext(CartContext)
    const [contador, setContador] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
        

    useEffect(() => {
        const valFloat = parseFloat(item.producto.precio.replace('.',''));
        const subTotalVal = valFloat * item.cantidad;   
        setSubTotal(subTotalVal)
        setContador(item.cantidad);
    }, [0])

    const priceVal = Intl.NumberFormat('de-DE');

    const handleDeleteItem = () =>{
        const quantity = item.cantidad;
        console.log('eliminando');
        for (let i = 0; i < quantity; i++){
            removeFromCart(item.producto);
        }
    }
    
    const handleCount = (count) => {
        //Se elimina un elemento:
        if(item.cantidad > count){
            removeFromCart(item.producto);
        }
        else if(item.cantidad < count){
            addToCart(item.producto, 1);
        }
        
        setContador(count);
        //Se ajusta el subtotal:
        const valFloat = parseFloat(item.producto.precio.replace('.',''));
        const subTotalVal = valFloat * count;   
        setSubTotal(subTotalVal)
    }

    return (
        <Card sx={{ display: 'flex', height: 100, justifyContent: 'space-between' }}>
            <Box sx={{display: 'flex'}}> 
            <CardMedia
                component="img"
                sx={{ width: 80, height: 80 }}
                image={item.producto.img}
            />

            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardHeader
                    title={item.producto.nombre}
                    className={styles.cardHeader}
                    disableTypography={true}
                    sx={{ height: 1 / 6 }} />
                <CardContent>
                    <p className={styles.cardContent}>${item.producto.precio}</p>
                </CardContent>
            </Box>
            </Box>
            

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignSelf: 'flex-end', alignItems:'end', paddingRight: '10px'}}>
                <IconButton aria-label="delete" color='error' sx={{width: 20}} onClick={handleDeleteItem}>
                    <DeleteOutline />
                </IconButton>
                <ItemQuantitySelector count = {contador} setCount={handleCount}/>
                <p className={styles.subTotal}>Subtotal: ${priceVal.format(subTotal)}</p>
            </Box>

        </Card>
    )
}
