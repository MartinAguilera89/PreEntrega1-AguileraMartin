import React, { useContext } from 'react'
import {Flex, Box, Spacer} from '@chakra-ui/react'
import carrito from '../assets/shopping-cart.png'
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const {compra} = useContext(CartContext);

  return (
    <Flex gap='1'>
        <Box className='categorias'>
        <img src={carrito} alt="carrito" width='30px' height='30px' />
        </Box>
        <Spacer />
        <Box className='categorias'>
        <p>{compra}</p>
        </Box>
    </Flex>
  )
}

export default CartWidget