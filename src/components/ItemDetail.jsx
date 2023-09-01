import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Image, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ productos }) => {

    const { id } = useParams();

    const filterProducts = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {filterProducts.map((p) => {
                return (
                <div key={p.id}>
                    <Center p='1rem'>
                        <Card className='card'>
                            <CardHeader>
                                <Heading size='xl'>{p.nombre}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image src={p.image} />
                                <Text>{p.description}</Text>
                                <Text>${p.price}</Text>
                                <Text>stock {p.stock}</Text>
                            </CardBody>
                            <CardFooter>
                                <ItemCount producto={p} />
                            </CardFooter>
                        </Card>
                    </Center>
                </div>)
            })}
        </div>
    )
}

export default ItemDetail