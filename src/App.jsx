import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting = "Saludos soy un Item!"/>
    </div>
  )
}

export default App
