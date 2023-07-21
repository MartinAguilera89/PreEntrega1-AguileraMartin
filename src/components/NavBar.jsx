import React from 'react'
import {Menu, MenuButton, Portal, MenuList, MenuItem, Flex, Box, Heading, Spacer, ButtonGroup, Button} from "@chakra-ui/react"
import {} from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import brand from '../assets/image-tienda-tigre.png'

const NavBar = () => {
  return (
    <Flex className='tienda'>
      <Box p='2'>
    <Heading size='md'><img src={brand} alt="logo tienda" width='150px' height='150px' /></Heading>
    </Box>
  <Spacer />
  <Box  className='categorias'>
  <ButtonGroup gap='3'>
        <Menu>
        <MenuButton className='boton' backgroundColor='red'>Indumentaria 2023</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>Camisetas</MenuItem>
              <MenuItem>Buzos y Camperas</MenuItem>
              <MenuItem>Shorts</MenuItem>
              <MenuItem>Accesorios</MenuItem>
            </MenuList>
          </Portal>
      </Menu>
    <Button backgroundColor='red'>
      <div>
      <CartWidget/>
      </div>
    </Button>
  </ButtonGroup>
  </Box>
  </Flex>
  )
}

export default NavBar
