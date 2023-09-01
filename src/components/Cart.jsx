import React from 'react'
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalCart = cart.reduce((acc, item) => (item.cantidad * item.price) + acc, 0);
    setTotal(totalCart)
  }, [cart])
  
  const canProceedToCheckout = total > 0;

  return (
    <>
      <div className="cart">
        {cart.map(p => (
          <div key={p.id}>
            <div>{p.nombre}</div>
            <div>${p.price}</div>
            <div>Productos agregados: {p.cantidad}</div>
            <img src={p.image}></img>
            <div>
              <button className='borrar' onClick={() => removeItem(p.id)}>Eliminar del carrito</button>
            </div>
          </div>
        ))}
        </div>

      
      <div className="compra">
        <p>Total de la Compra: ${total}</p>
        {canProceedToCheckout ? (
          <Link to={"/checkout"}>
            <button>COMPRAR</button>
          </Link>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>
    </>

  )
}

export default Cart

