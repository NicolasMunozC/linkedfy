import { Avatar, Box, Button, Heading, IconButton, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function User({userData, isOwner}) {
  return (
    <Box bgColor={'white'} maxW={'350px'} mx={'auto'} borderRadius={'10px'} display='flex' flexDir='column' mt={'-30px'} textAlign={'center'} shadow={'lg'} mb={'40px'}>
    <Avatar size='xl' src='' mx={'auto'} mt={'-50px'} border={'2px solid #FFF'} mb={'5px'}/>
    <Heading fontFamily={'Poppins'} color={'brand.black'} fontSize={'18px'} fontWeight={400}>{userData.name + ' ' + userData.lastname}</Heading>
    <Heading fontFamily={'Poppins'} color={'brand.blue'}>@{userData.tiktok}</Heading>
    <Text fontFamily={'Poppins'} fontSize={'15px'} mb={'20px'} color={'brand.black'}>Velit eu ipsum cupidatat in duis. Duis consequat dolor ea proident ex aliquip pariatur velit labore consequat.</Text>
    <SimpleGrid columns={5} spacing={5} mb={'20px'} mx={'auto'}>
      <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaFacebookF />} isRound/></Box>
      <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaInstagram />} isRound/></Box>
      <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaTiktok />} isRound/></Box>
      <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaWhatsapp />} isRound/></Box>
      <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaTwitter />} isRound/></Box>
    </SimpleGrid>
    {isOwner && <Button w={'fit-content'} mx={'auto'} mb={3}>Modificar Perfil</Button>}
  </Box>
  )
}

export default User