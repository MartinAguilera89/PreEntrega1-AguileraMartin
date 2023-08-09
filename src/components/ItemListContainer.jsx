import React from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import Camiseta1 from "../assets/imgProd/CAMISETA_TITULAR.jpg"
import Camiseta2 from "../assets/imgProd/CAMISETA_SUPLENTE.jpg"
import Camiseta3 from "../assets/imgProd/CAMISETA_COPA.jpg"
import Camiseta4 from "../assets/imgProd/CAMISETA_ANIVERSARIO.jpg"
import Camiseta5 from "../assets/imgProd/CAMISETA_ARQUERO.jpg"
import Camiseta6 from "../assets/imgProd/CAMISETA_ARQUEROII.jpg"
import Camperon from "../assets/imgProd/CAMPERON.jpg"
import Campera from "../assets/imgProd/CAMPERA.jpg"
import CamperaConCapucha from "../assets/imgProd/CAMPERA_CAPUCHA.jpg"
import Buzo1902 from "../assets/imgProd/BUZO_1902.jpg"
import BuzoEntrenamiento from "../assets/imgProd/BUZO_ENTRENAMIENTO.jpg"
import ShortTitular from "../assets/imgProd/SHORT_TITULAR.jpg"

const ItemListContainer = () => {
  const { category } = useParams()

  const productos = [
  { id: 1, image: Camiseta1, nombre: "Camiseta Titular", price: 22000, category: "camisetas", description:"Temporada Kappa 2023" },
  { id: 2, image: Camiseta2, nombre: "Camiseta Suplente", price: 22000, category: "camisetas", description:"Temporada Kappa 2023" },
  { id: 3, image: Camiseta3, nombre: "Camiseta Copa", price: 22000, category: "camisetas", description:"Temporada Kappa 2023"  },
  { id: 4, image: Camiseta4, nombre: "Camiseta Aniversario", price: 20000, category: "camisetas", description:"Temporada Kappa 2023"  },
  { id: 5, image: Camiseta5, nombre: "Camiseta ArqueroI", price: 22000, category: "camisetas", description:"Temporada Kappa 2023"  },
  { id: 6, image: Camiseta6, nombre: "Camiseta ArqueroII", price: 22000, category: "camisetas", description:"Temporada Kappa 2023"  },
  { id: 7, image: Camperon , nombre: "Camperon", price: 60000, category: "BuzosyCamperas", description:"Temporada Kappa 2023"  },
  { id: 8, image: Campera , nombre: "Campera", price: 35000, category: "BuzosyCamperas", description:"Temporada Kappa 2023"  },
  { id: 9, image: CamperaConCapucha , nombre: "Campera con capucha", price: 45000, category: "BuzosyCamperas", description:"Temporada Kappa 2023"  },
  { id: 10, image: Buzo1902 , nombre: "Buzo 1902", price: 25000, category: "BuzosyCamperas", description:"Temporada Kappa 2023"  },
  { id: 11, image: BuzoEntrenamiento , nombre: "Buzo Entrenamiento", price: 28000, category: "BuzosyCamperas", description:"Temporada Kappa 2023"  },
  { id: 12, image: ShortTitular , nombre: "Short Titular", price: 12000, category: "shorts", description:"Temporada Kappa 2023"  },
  ]

  const getProductos = new Promise((resolve, reject) => {
      if (productos.length > 0) {
        setTimeout(()=> {
          resolve(productos)
        }, 2000)
      } else {
      reject(new Error("No hay datos"))
      }
    })

  getProductos
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })
 
  const filteredProductos = productos.filter((producto) => producto.category === category)  

  return (
      <>
        <ItemList productos={filteredProductos}/>
      </>
      )
  }
  
export default ItemListContainer