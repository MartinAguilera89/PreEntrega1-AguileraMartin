import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Image, Stack, ButtonGroup, Divider, Flex, Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, description, itemId, price, image}) => {
  return (
  <Flex>
    <Box p='4'>
  <Card maxW='sm'>
    <CardBody>
    <Image src={image}/>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{nombre}</Heading>
        <Text>
          {description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
      <Link to={`/item/${itemId}`}>
        <Button variant='solid' colorScheme='blue'>
          Detalle
        </Button>
        </Link>
      </ButtonGroup>
    </CardFooter>
  </Card>
  </Box>
  </Flex>
  )
}

export default Item