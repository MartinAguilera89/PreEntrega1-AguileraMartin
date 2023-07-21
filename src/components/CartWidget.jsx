import React from 'react'
import {Flex, Box, Spacer} from '@chakra-ui/react'
import cart from '../assets/shopping-cart.png'

const CartWidget = () => {
  return (
    <Flex gap='1'>
        <Box className='categorias'>
        <img src={cart} alt="carrito" width='30px' height='30px' />
        </Box>
        <Spacer />
        <Box className='categorias'>
        <p>5</p>
        </Box>
        
    </Flex>
  )
}

export default CartWidget