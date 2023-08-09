import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Image, Center} from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({productos}) => {
    const {id} = useParams();
    const itemId = parseInt(id);

    const filteredProductos = productos.filter((producto) => producto.id === itemId)  

    return (
        <div>
            {filteredProductos.map((p) => ( 
                    <div  key={p.id}>
                        <Center p='1rem'>
                          <Card>
                            <CardHeader>
                             <Heading size='md'>{p.nombre}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image src={p.image}/>
                                <Text>{p.description}</Text>
                                <Text>${p.price}</Text>
                            </CardBody>
                            <CardFooter>
                                <ItemCount />
                            </CardFooter>
                            </Card>
                            </Center>
                    </div>
                )
            )}
        </div>
    )
}

export default ItemDetail