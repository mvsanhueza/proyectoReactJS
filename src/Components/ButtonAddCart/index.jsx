import { Button } from '@mui/material'
import { CartContext } from '../../contexts/Cart/CartContext';
import { useContext } from 'react';

const ButtonAddCart = ({producto, cantidad}) => {

    const {cart, addToCart, cantItems} = useContext(CartContext);

    const handleAdd = () => {
        addToCart(producto, cantidad);
    }
    return (
        <Button variant="contained" size='medium' sx={{ background: '#f68a7fff', ":hover": { background: '#f68a7fff' } }} onClick={handleAdd}>
            Añadir al carrito
        </Button>
    )
}

export default ButtonAddCart