import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { app } from '../App'
import { getDocs, collection, getFirestore } from 'firebase/firestore'


const ItemListContainer = () => {
  const { category } = useParams()

  const [productos, setProductos] = useState([])
  const [loader, setLoader] = useState(true)

  const db = getFirestore(app)

  useEffect(() => {
    getDocs(collection(db, "PRODUCTOS"))
      .then(snapshot => {
        const docs = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        setProductos(docs)
      }).finally(() => setLoader(false))
  }, [])

  const catalogo = productos
  const filteredProductos = productos.filter((producto) => producto.category === category);

  return (
    <>
      {category ? <ItemList productos={filteredProductos} /> : <ItemList productos={catalogo} />}
    </>
  )
}

export default ItemListContainer