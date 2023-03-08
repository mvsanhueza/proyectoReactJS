import {Card, CardActions, CardHeader, CardMedia, Button, CardContent} from '@mui/material';
import {Link} from 'react-router-dom';
import ButtonAddCart from '../ButtonAddCart';
import styles from './carditem.module.css';

const CardItem = ({product}) => {
  return (
    <Card className={styles.container}>
      <Link to={`item/${product.id}`} style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          sizes='(max-width: 300px) 100vw, 300px'
          image={product.img}
        />
        <CardHeader 
        title = {product.nombre}
        className={styles.cardHeader}
        disableTypography={true}
        />        
      </Link>     
      <CardContent>
        <p className={styles.cardContent}>${product.precio}</p>
      </CardContent>
      <CardActions>
        <ButtonAddCart/>
      </CardActions>

    </Card>
  )
}

export default CardItem