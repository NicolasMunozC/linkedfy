import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import tiktokLogo from '../../assets/images/tiktok.png'
import imageTest from '../../assets/tiktokimagepost.jpeg'

function Posts() {
  return (
    <Box bgColor={'white'} maxW={'375px'} mx={'auto'} display='flex' flexDir='column' textAlign={'center'} pt={'20px'} pb={'50px'} >
    <Image src={tiktokLogo} width={'100px'} mx={'auto'}  mb={'20px'} />
    <SimpleGrid columns={3} spacing={'1px'} mx={'auto'}>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>
      <Box w={'123px'}><Image src={imageTest}/></Box>

    </SimpleGrid>
  </Box>
  )
}

export default Posts