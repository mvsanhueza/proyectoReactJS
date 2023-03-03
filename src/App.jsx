import { Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={
          <ItemListContainer greeting = "Saludos soy un Item!"/>
          }/>
        </Routes>        
    </div>
  )
}

export default App
