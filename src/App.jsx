import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductosListContainer from './components/ProductosListContainer/ProductosListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'

function App() {
  
  const onAdd = (quantity) => {
    console.log(quantity)

  }

  return (
    <>
      <Navbar/>
      <ProductosListContainer/>   
      <ProductDetailContainer productId={3}/>   
    </>
  )
}

export default App
