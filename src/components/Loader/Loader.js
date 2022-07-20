import './Loader.css'
import { 
  Box,
  Heading,
 } from '@chakra-ui/react'

function Loader() {

  return (
    <Box bgColor={'brand.yellow'} minH={'100vh'} minW={'100vw'} pt={'300px'}>
      <Heading pos={'absolute'} top={0} right={0} fontFamily={'Poppins'} color={'brand.blue'} fontSize={'15px'} fontWeight={'900'} >Linkedfy</Heading>
      <Box pos={'relative'} maxW={'300px'} left={0} right={0} margin={'auto'}>
        <Box w={'20px'} h={'20px'} pos={'absolute'} borderRadius={'50%'} bgColor={'white'} left={'15%'} zIndex={2} className="circle"></Box>
        <Box w={'20px'} h={'20px'} pos={'absolute'} borderRadius={'50%'} bgColor={'white'} left={'15%'} zIndex={2} className="circle"></Box>
        <Box w={'20px'} h={'20px'} pos={'absolute'} borderRadius={'50%'} bgColor={'white'} left={'15%'} zIndex={2} className="circle"></Box>
        <Box border={'1px solid'} width={'20px'} h={'4px'} borderRadius={'50%'} bgColor={'brand.black'} pos={'absolute'} top={'62px'} zIndex={1} left={'15%'} blur={'1px'} className="shadow"></Box>
        <Box border={'1px solid'} width={'20px'} h={'4px'} borderRadius={'50%'} bgColor={'brand.black'} pos={'absolute'} top={'62px'} zIndex={1} left={'15%'} blur={'1px'} className="shadow"></Box>
        <Box border={'1px solid'} width={'20px'} h={'4px'} borderRadius={'50%'} bgColor={'brand.black'} pos={'absolute'} top={'62px'} zIndex={1} left={'15%'} blur={'1px'} className="shadow"></Box>
        <Heading pos={'absolute'} width={'fit-content'} top={'80px'} left={0} right={0} margin={'auto'} fontFamily={'Poppins'} fontSize={'20px'}>Cargando...</Heading>
      </Box>
    </Box>
  )
}

export default Loader