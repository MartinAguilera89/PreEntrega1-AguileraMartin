import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <div>Cargando producto...<Spinner
    thickness='5px'
    speed='0.70s'
    emptyColor='gray.200'
    color='blue.500'
    size='md'
  /></div>
  )
}

export default Loader