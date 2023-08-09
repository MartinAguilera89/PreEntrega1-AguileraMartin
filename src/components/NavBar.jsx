import React from 'react'
import {Menu, MenuButton, Portal, MenuList, MenuItem, Flex, Box, Heading, Spacer, ButtonGroup, Button} from "@chakra-ui/react"
import {} from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import brand from '../assets/image-tienda-tigre.png'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Flex className='tienda'>
      <Box p='2'>
        <Link to={"/"}>
    <Heading size='md'><img src={brand} alt="logo tienda" width='150px' height='150px' /></Heading>
    </Link>
    </Box>
  <Spacer />
  <Box  className='categorias'>
  <ButtonGroup gap='3'>
        <Menu>
        <MenuButton className='boton' backgroundColor='red'>Indumentaria 2023</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem><Link to={`/category/${'camisetas'}`}> Camisetas</Link></MenuItem>
              <MenuItem><Link to={`/category/${'BuzosyCamperas'}`}> Buzos y Camperas</Link></MenuItem>
              <MenuItem><Link to={`/category/${'shorts'}`}> Shorts</Link></MenuItem>
            </MenuList>
          </Portal>
      </Menu>
    <Button backgroundColor='red'>
      <div>
      <Link to={"/cart"}>
      <CartWidget/>
      </Link>
      </div>
    </Button>
  </ButtonGroup>
  </Box>
  </Flex>
  )
}

export default NavBar


