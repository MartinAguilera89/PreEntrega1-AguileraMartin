import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';


const ItemCount = ({ producto }) => {
  
  const [contador, setContador] = useState(1);
  const {addCart } = useContext(CartContext)

  const sumar = () => {
    if (contador < producto.stock) { setContador(contador + 1); }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const [agregarProd, setAgregarProd] = useState()

  useEffect(() => {
    const cantidad = contador
    setAgregarProd({ ...producto, cantidad })
  }, [contador])

  return (
    <div className="item-count-card">
      <button className="item-count-button" onClick={restar}>
        -
      </button>
      <div className="item-count-number">{contador}</div>
      <button className="item-count-button" onClick={sumar}>
        +
      </button>
      <button className="item-count-cart" onClick={() => addCart(agregarProd)}>
        Agregar al Carrito
      </button>

    </div>
  )
}

export default ItemCount;