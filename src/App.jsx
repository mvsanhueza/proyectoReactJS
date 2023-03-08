import { Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

function App() {

  const products = [
    {
      nombre: "Exploding Kittens Party Pack",
      precio: "29.990",
      id: "1",
      categoria: "Party Game",
      img: "/src/assets/img/ImgProducts/exploding-kittens-party.png",
      descripcion: "Se trata de una versión gatuna de la ruleta rusa con un gran componente estratégico. Los jugadores van robando cartas hasta que a alguien le sale un Exploding Kitten . Cuando esto sucede, esa persona muere y queda eliminada de la partida (a no ser que tenga una carta de Desactivación, que permite desactivar al Exploding Kitten con armas como punteros láser, friegas de barriga o bocatas de menta gatuna). El resto de las cartas de la baraja sirven para cambiar de lugar, mitigar o evitar a los Exploding Kittens.",
      youtubeLink: "https://www.youtube.com/embed/lOP8ZjkN7gc",
    },
    {
      nombre: "¡Aventureros al Tren! Europa",
      precio: "39.990",
      id: "2",
      categoria: "Estrategia",
      img: "/src/assets/img/ImgProducts/aventureros-europa.png",
      descripcion: "¡Aventureros al Tren! Europa te invita a una nueva aventura en tren a lo largo y ancho de la Europa de fin de siglo, desde las escarpadas laderas de Edimburgo hasta los soleados muelles de Constantinopla, desde los polvorientos callejones de Pamplona hasta una estación azotada por el viento en Berlín. ¿Te arriesgarás a un viaje a través de los oscuros túneles de Suiza? ¿Te subirás al ferry del Mar Negro? ¿O construirás estaciones de tren en las grandes capitales de los antiguos imperios? ¡Tu siguiente movimiento puede convertirte en el mayor magnate ferroviario de Europa!",
      youtubeLink: "https://www.youtube.com/embed/lOP8ZjkN7gc",      
    },
    {
      nombre: "Crónicas del Crimen 1400",
      precio: "34.990",
      id: "3",
      categoria: "Scape Room",
      img: "/src/assets/img/ImgProducts/cronicas_1400.png",
      descripcion: "Año 1400. Tu nombre es Abelard Lavel, un caballero asentado en Paris. Desde niño has tenido sueños proféticos y extraños sobre crímenes del pasado y del futuro. Has conseguido usar tu poder para hacer el bien, resolviendo misterios que nadie más podría. Ahora gracias a tu creciente reputación, las gentes de Paris buscan tu ayuda. ¿Acudirás en su auxilio?",
      youtubeLink: "https://www.youtube.com/embed/0Q6ezIoYy4k",    
    },
  ]
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={
          <ItemListContainer productos = {products}/>
          }/>
          <Route path='/item/:id' element={<ItemDetailContainer products={products} />}          
          />
        </Routes>        
    </div>
  )
}

export default App
