import { Route, Routes } from 'react-router-dom'
import './App.css'
import db from '../db/firebase-config.js';
import { useState, useEffect } from 'react';
import {collection, doc, getDocs} from 'firebase/firestore';
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

function App() {

  // const products = [
  //   {
  //     nombre: "Exploding Kittens Party Pack",
  //     precio: "29.990",
  //     id: "1",
  //     categoria: "Party Game",
  //     img: "/src/assets/img/ImgProducts/exploding-kittens-party.png",
  //     descripcion: "Se trata de una versión gatuna de la ruleta rusa con un gran componente estratégico. Los jugadores van robando cartas hasta que a alguien le sale un Exploding Kitten . Cuando esto sucede, esa persona muere y queda eliminada de la partida (a no ser que tenga una carta de Desactivación, que permite desactivar al Exploding Kitten con armas como punteros láser, friegas de barriga o bocatas de menta gatuna). El resto de las cartas de la baraja sirven para cambiar de lugar, mitigar o evitar a los Exploding Kittens.",
  //     youtubeLink: "https://www.youtube.com/embed/lOP8ZjkN7gc",
  //   },
  //   {
  //     nombre: "¡Aventureros al Tren! Europa",
  //     precio: "39.990",
  //     id: "2",
  //     categoria: "Estrategia",
  //     img: "/src/assets/img/ImgProducts/aventureros-europa.png",
  //     descripcion: "¡Aventureros al Tren! Europa te invita a una nueva aventura en tren a lo largo y ancho de la Europa de fin de siglo, desde las escarpadas laderas de Edimburgo hasta los soleados muelles de Constantinopla, desde los polvorientos callejones de Pamplona hasta una estación azotada por el viento en Berlín. ¿Te arriesgarás a un viaje a través de los oscuros túneles de Suiza? ¿Te subirás al ferry del Mar Negro? ¿O construirás estaciones de tren en las grandes capitales de los antiguos imperios? ¡Tu siguiente movimiento puede convertirte en el mayor magnate ferroviario de Europa!",
  //     youtubeLink: "https://www.youtube.com/embed/lOP8ZjkN7gc",      
  //   },
  //   {
  //     nombre: "Crónicas del Crimen 1400",
  //     precio: "34.990",
  //     id: "3",
  //     categoria: "Scape Room",
  //     img: "/src/assets/img/ImgProducts/cronicas_1400.png",
  //     descripcion: "Año 1400. Tu nombre es Abelard Lavel, un caballero asentado en Paris. Desde niño has tenido sueños proféticos y extraños sobre crímenes del pasado y del futuro. Has conseguido usar tu poder para hacer el bien, resolviendo misterios que nadie más podría. Ahora gracias a tu creciente reputación, las gentes de Paris buscan tu ayuda. ¿Acudirás en su auxilio?",
  //     youtubeLink: "https://www.youtube.com/embed/0Q6ezIoYy4k",    
  //   },
  //   {
  //     nombre: "Azul Pabellón de Verano",
  //     precio: "36.990",
  //     id: "4",
  //     categoria: "Estrategia",
  //     img: "/src/assets/img/ImgProducts/azul_pabellon.png",
  //     descripcion: "En Azul – Pabellón de Verano, los jugadores tienen la tarea de construir los pisos de la obra maestra sin construir del Rey. Usando la misma mecánica de selección de la serie Azul, los jugadores deben seleccionar cuidadosamente los materiales más bellos y evitar el despilfarro de suministros. Sólo los mejores artesanos estarán a la altura del desafío.",
  //     youtubeLink: "https://www.youtube.com/embed/WOoKrjIkMxU",      
  //   },
  //   {
  //     nombre: "Love Letter Edición Portátil",
  //     precio: "12.990",
  //     id: "5",
  //     categoria: "Party Game",
  //     img: "/src/assets/img/ImgProducts/love_letter.png",
  //     descripcion: "Love Letter es un juego de riesgo, deducción y suerte, con reglas sencillas que crean interacciones dinámicas y divertidas entre los jugadores, que deberán intentar entregar su carta de amor en las manos de la Princesa mientras mantienen las cartas de otros jugadores alejadas. ¿Podrás superar a tus amigos y ganarte la confianza de la noble princesa?",
  //     youtubeLink: "https://www.youtube.com/embed/NQcQDyoo_H0",
  //   },
  // ]

  const [products, setProducts] = useState([]);
  const itemsCollectionRef = collection(db, 'items');

  const categoriesName = [... new Set(products.map(product => product.categoria))]
  const categories = categoriesName.map((categoria,index)=>{
    return {
      id: index + 1,
      nombre: categoria,
      url: '/category/'+ (index + 1),
    }
  })

  const getItems = async () =>{
    const itemsCollection = await getDocs(itemsCollectionRef);
    setProducts(itemsCollection.docs.map(doc => ({...doc.data(), id: doc.id})));
  }

  console.log(categories);

  useEffect(()=>{
    getItems();
  }, [])

  return (
    <div className="App">
        <NavBar categorias={categories}/>
        <Routes>
          <Route path='/' element={
          <ItemListContainer products = {products} categories={categories}/>
          }/>
          <Route path='/item/:id' element={<ItemDetailContainer products={products} categories={categories} />}          
          />
          <Route path='/category/:id' element={<ItemListContainer products={products} categories={categories}/>}          
          />
          
        </Routes>        
    </div>
  )
}

export default App
