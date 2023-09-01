import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { app } from '../App'
import { getDocs, collection, getFirestore } from 'firebase/firestore'
import Loader from "./Loader";

const ItemDetailContainer = () => {

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

  return (
  <>{loader
    ? <Loader/> 
    : <ItemDetail productos={productos} />
    }
  </>
  )
}

export default ItemDetailContainer