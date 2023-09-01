import React from 'react'
import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { app } from "../App";
import {FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react'

const Checkout = () => {

  const [orderId, setOrderId] = useState("")

  const { cart, borrarCart } = useContext(CartContext)

  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")

  const toast = useToast(); 

  const createOrder = async (e) => {

      const db = getFirestore(app)

      e.preventDefault()

      try {
          const buyer = {
              nombre, direccion, telefono, email
          }

          const items = cart.map((product) => ({
              
            nombre: product.nombre,
            id: product.id,
            price: product.price,
            cantidad: product.cantidad
          }))

          const order = {
              buyer,
              items,
              total: cart.reduce((acc, item) => (item.cantidad * item.price) + acc, 0),
              date: new Date().toString()

          }

          const setOrder = await addDoc(collection(db, "ordenes"), order)

          setOrderId(setOrder.id)

          borrarCart()

          toast({
            title: "COMPRA FINALIZADA",
            description: `¡Gracias por su compra! El número de orden es: ${setOrder.id}`,
            status: "success",
            duration: 9000,
            isClosable: true,
            position:"bottom-left",
          });

      } catch (error) {
          console.error(`Error al comprar ${error}`)
      }
  }
  return (
  <form onSubmit={createOrder}>
    <FormControl  className="check" isRequired>
      <FormLabel htmlFor="nombre">Nombre</FormLabel>
      <Input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
    </FormControl>
    <FormControl  className="check" isRequired>
      <FormLabel htmlFor="direccion">Direccion</FormLabel>
      <Input type="text" placeholder='Direccion' onChange={(e) => setDireccion(e.target.value)}  />
    </FormControl>
    <FormControl className="check" isRequired>
      <FormLabel htmlFor="telefono">Telefono</FormLabel>
      <Input type="number" placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} />
    </FormControl>
    <FormControl className="check" isRequired>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
    </FormControl>
    <button className='fin' type="submit">Finalizar Compra</button>
    </form>
  
  )
}

export default Checkout