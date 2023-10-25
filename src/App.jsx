import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const saludo= "Bienvenidos a mi primer E-Commerce en React"

  return (
    <>
      <Navbar/>
      <ItemListContainer saludo={saludo}/>
    </>
  )
}

export default App
