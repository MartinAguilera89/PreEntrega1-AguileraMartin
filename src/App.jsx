import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Camisetas from './components/Camisetas'
import BuzosyCamperas from './components/BuzosyCamperas'
import Shorts from './components/Shorts'


const App = () => {

  return (
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/camisetas" element={<Camisetas />} />
      <Route exact path="/shorts" element={<Shorts />} />
      <Route exact path="/buzosycamperas" element={<BuzosyCamperas />} />
      <Route exact path="/category/:category" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} /> 
    </Routes>
  </BrowserRouter>
  )
} 

export default App  