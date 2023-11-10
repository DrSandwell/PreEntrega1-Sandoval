import './App.css'
import Navbar from './components/Navbar/Navbar'
import CardContainer from './components/CardContainer/CardContainer'
import Card from './components/Card/Card'
import ItemCount from './components/ItemCount/ItemCount'
import ProductosListContainer from './components/ProductosListContainer/ProductosListContainer'
import { useState } from 'react'

function App() {
  
  const onAdd = (quantity) => {
    console.log(quantity)

  }

  return (
    <>
      <Navbar/>
      <ProductosListContainer/>
      
      <ItemCount initial= {1} stock= {10} onAdd= {onAdd}/>
      
    </>
  )
}

export default App
