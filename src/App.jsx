import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a la tienda de Tigre"/>
    </>
  )
}

export default App