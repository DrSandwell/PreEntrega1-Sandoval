import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductosListContainer from './components/ProductosListContainer/ProductosListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Error from './components/Error/Error'
import AboutMe from './components/AboutMe/AboutMe'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>

      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductosListContainer />} />
            <Route path='/detalle/:idProduct' element={<ProductDetailContainer />} />
            <Route path='/:categoryId' element={<ProductosListContainer />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/ubicacion' element={<Ubicacion />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='*' element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}

export default App
