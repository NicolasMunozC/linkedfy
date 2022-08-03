import React from 'react'
import {
    Box,
    Heading,
    IconButton,
} from '@chakra-ui/react'
import { auth, signOut} from '../../firebase'

import { 
    FaBars,
   } from "react-icons/fa";

function Header() {
  return (
    <Box>
    <Box display={'flex'} justifyContent={'space-between'} bgColor={'brand.black'} pt={'10px'} px={'20px'}>
        <Heading fontFamily={'Poppins'} color={'brand.blue'} fontSize={'30px'} fontWeight={800} >Linkedfy<span>!</span></Heading>
        <IconButton onClick={() => signOut(auth)} icon={<FaBars />} variant={'unstyled'} color={'brand.blue'} boxSize={'sd'} fontSize={'x-large'}/>
    </Box>
    <Box bgColor={'brand.black'} h={'130px'} borderBottomRadius={'20px'} mt={-1} />

    </Box>
  )
}

export default Header