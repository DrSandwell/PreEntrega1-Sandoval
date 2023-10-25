import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)
  const saludo= "Bienvenidos a mi primer E-Commerce en React"

  return (
    <>
      <Navbar/>
      <ItemListContainer saludo={saludo}/>

    </>
  )
}

export default App
