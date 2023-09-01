import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const compra = cart.length;

  const addCart = (producto) => {

    const isItemFound = cart.find((item) => item.id === producto.id);

    if (isItemFound == undefined) {
      setCart((current => [...current, {...producto}]))
    }else{
      isItemFound.cantidad = producto.cantidad
    }
    

  };
  const removeItem = (id) => {

    const cartNuevo = cart.filter((item) => item.id != id)
    setCart(cartNuevo)
  }
  const borrarCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, setCart, compra, addCart, removeItem, borrarCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider