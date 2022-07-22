import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box textAlign={'center'} pos={'absolute'} bottom={0} bgColor={'white'} w={'100vw'} py={'10px'}>
        <Text fontFamily={'Poppins'} fontSize={'20px'} fontWeight={400} color={'brand.black'}>Todos los derechos reservados</Text>
    </Box>
  )
}

export default Footer