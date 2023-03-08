import { Button } from '@mui/material'

const ButtonAddCart = () => {
    return (
        <Button variant="contained" size='medium' sx={{ background: '#f68a7fff', ":hover": { background: '#f68a7fff' } }}>
            Añadir al carrito
        </Button>
    )
}

export default ButtonAddCart