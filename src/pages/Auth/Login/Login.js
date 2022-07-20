import React, { useRef, useState } from 'react'
import './Login.css'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../../firebase'
import {
  Box, Button, Heading, IconButton, Input, Link, Text,
} from '@chakra-ui/react'
import {
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";

function Login() {

  const [showPassword, setShowPassword] = useState(false)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
      ).then( (authUser) => {
          console.log(authUser)
      }).catch( error => { 
          console.log(error.message)
      })
  }

  const login = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value,
          ).then( (authUser) => {
              console.log(authUser)
          }).catch( error => { 
              console.log(error.message)
          })
  }

  
  return (
    <Box backgroundColor={'#FED766'} minH={'100vh'} display='flex'>
      <Box borderRadius={10} backgroundColor={'rgba(255, 255, 255, 0.5);'} boxShadow={'2xl'} p={'60px 30px'} max-w={'330px'} max-h={'600px'} m={'auto auto'}>
        <Heading color={'#009FB7'} fontSize={'20px'} fontWeight={800}>Linkedfy</Heading>
        <Text opacity={'0.6'} color={'gray'} fontSize={'15px'} casing={'uppercase'} fontWeight={400}>Un gusto verte</Text>
        <Heading fontSize={'40px'} fontWeight={800} color={'#333'}>Iniciar Sesion<span color={'#009FB7'} className='dotSpan'>.</span></Heading>
        {/* <div className='externalLogin'>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div> */}
        <Box>
          <Box display={'flex'} flexDir={'column'} textAlign={'center'} mb={'20px'}>
            <Text textAlign={'left'} fontWeight={300} color={'#333'} mb={'-6px'} zIndex={1}>Correo</Text>
            <Input variant={'outline'} ref={emailRef} type='email' placeholder='gatito@fiufiu.com' isRequired border={'none'} mb={'10px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}}/>
            <Text textAlign={'left'} fontWeight={300} color={'#333'} mb={'-6px'} zIndex={1}>Contraseña</Text>
            <Box display={'flex'} pos={'relative'}>
              <Input ref={passwordRef} type={showPassword ? 'text' : 'password'} placeholder='meow123' isRequired border={'none'} mb={'10px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}}/>
              <IconButton variant={'unstyled'} onClick={() => {setShowPassword(!showPassword)}} icon={showPassword ? <FaEyeSlash /> : <FaEye />} pos={'absolute'} right={0} bottom={'15px'} w={'35px'} h={'35px'} opacity={'0.7'} m={'auto 0'} />
            </Box>
            <Link href='/login' color={'#222'} opacity={'0.8'} _hover={{textDecor: 'none', color: '#009FB7'}}>¿Olvidaste tu contraseña?</Link>
          </Box>
          <Box display={'flex'} flexDir={'row'} padding={'0 5px'} justifyContent={'center'} fontWeight={600}>
            <Button bgColor={'#333'} h={'45px'} w={'130px'} border={'none'} borderRadius={'5px'} color={'#FFF'} ml={'2px'} fontWeight={600} fontSize={'15px'} _hover={{color: '#FED766'}} type='submit' onClick={register}>Crear Cuenta</Button>
            <Button bgColor={'#009FB7'} h={'45px'} w={'130px'} border={'none'} borderRadius={'5px'} color={'#FFF'} ml={'2px'} fontWeight={600} fontSize={'15px'} _hover={{color: '#FED766'}} type='submit' onClick={login}>Iniciar Sesion</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login