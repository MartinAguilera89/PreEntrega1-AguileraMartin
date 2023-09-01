import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Cart from './components/Cart'
import CartContext from './context/CartContext'
import CartWidget from './components/CartWidget'
import Checkout from "./components/Checkout"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCrgmSKfpTXK4fnoxppPMUxCqxZWMi_YY",
  authDomain: "tiendatigre23.firebaseapp.com",
  projectId: "tiendatigre23",
  storageBucket: "tiendatigre23.appspot.com",
  messagingSenderId: "452129361636",
  appId: "1:452129361636:web:7713c849a886ecb00f26f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



const App = () => {

  return (
    <CartContext>
    <BrowserRouter>
     <NavBar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer/>} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/catalogo" element={<ItemListContainer />} />
      <Route exact path="/category/:category" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} /> 
      <Route exact path="/cartwidget" element={<CartWidget />} /> 
      <Route exact path="/checkout" element={<Checkout />} /> 
    </Routes>
  </BrowserRouter>
  </CartContext>
  )
} 

export default App  