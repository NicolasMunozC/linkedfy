import React, { useEffect, useRef, useState } from 'react'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../../firebase'
import { db, doc, setDoc } from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import {
  Box, 
  Button, 
  Heading, 
  IconButton, 
  Input, 
  Link, 
  Text,
  useToast
} from '@chakra-ui/react'
import {
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import './Login.css'
import Loader from '../../../components/Loader/Loader';

function Login({user}) {

  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect( () => {
    if(user){
      navigate('/account')
    }
    setTimeout( () => {
      setIsLoading(false)
    },2000)
  })

  const [showPassword, setShowPassword] = useState(false)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const toast = useToast()

  const register =  (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
      ).then( (authUser) => {

        toast({
          title: 'Cuenta Creada! :D.',
          position: 'top-right',
          status: 'success'
        })
        setDoc(doc(db, "users", authUser.user.uid), {
          email: authUser.user.email,
          priv: "user",
          plan: "basic",
          status: "new",
        });

      }).catch( error => { 
        if(error.message === "Firebase: Error (auth/email-already-in-use)."){
          toast({
            title: 'Ups! Error al crear la cuenta.',
            description: "Parece que ya tienes una cuenta!.",
            position: 'top-right',
            status: 'error'
          })
          return
        }
        toast({
          title: 'Ups! Error al crear la cuenta.',
          description: "Hubo un problema, envianos un correo a soporte@linkedfy.com",
          position: 'top-right',
          status: 'error'
        })
      })
  }

  const login = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value,
          ).then( (authUser) => {
              toast({
                title: 'Te extrañabamos! :D.',
                position: 'top-right',
                status: 'success'
              })
          }).catch( error => { 

            toast({
              title: 'Usuario o Contraseña erronea.',
              position: 'top-right',
              status: 'error'
            })

          })
  }

  
  return (
    <>
    {
      isLoading ?
      <Loader /> :
      <Box backgroundColor={'brand.yellow'} minH={'100vh'} display='flex'>
        <Box borderRadius={10} backgroundColor={'rgba(255, 255, 255, 0.5);'} boxShadow={'2xl'} p={'60px 30px'} max-w={'330px'} max-h={'600px'} m={'auto auto'}>
          <Heading color={'brand.blue'} fontSize={'20px'} fontWeight={900} fontFamily={'Poppins'}>Linkedfy</Heading>
          <Text opacity={'0.6'} color={'gray'} fontSize={'15px'} casing={'uppercase'} fontWeight={'400'}>Un gusto verte</Text>
          <Heading fontFamily={'Poppins'} fontSize={'40px'} fontWeight={800} color={'brand.black'} mb={'20px'}>Iniciar Sesion<span className='dotSpan'>.</span></Heading>
          {/* <div className='externalLogin'>
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
          </div> */}
          <Box textAlign={'center'}>
            <Box display={'flex'} flexDir={'column'} textAlign={'center'} mb={'20px'}>
              <Text textAlign={'left'} fontWeight={300} color={'brand.black'} mb={'-6px'} zIndex={1}>Correo</Text>
              <Input variant={'unstyled'} ref={emailRef} type='email' placeholder='gatito@fiufiu.com' isRequired border={'none'} mb={'20px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}} _placeholder={{opacity: '0.6'}} />
              <Text textAlign={'left'} fontWeight={300} color={'brand.black'} mb={'-6px'} zIndex={1}>Contraseña</Text>
              <Box display={'flex'} pos={'relative'}>
                <Input variant={'unstyled'} ref={passwordRef} type={showPassword ? 'text' : 'password'} placeholder='meow123' isRequired border={'none'} mb={'20px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}} _placeholder={{opacity: '0.6'}}/>
                <IconButton aria-label='showPassword' variant={'unstyled'} onClick={() => {setShowPassword(!showPassword)}} icon={showPassword ? <FaEyeSlash /> : <FaEye />} pos={'absolute'} right={0} bottom={'15px'} opacity={'0.7'} fontSize={'25px'} isRound/>
              </Box>
            </Box>
            <Box display={'flex'} flexDir={'row'} padding={'0 5px'} justifyContent={'center'} fontWeight={600} mb={'20px'}>
              <Button bgColor={'brand.black'} h={'45px'} w={'130px'} border={'none'} borderRadius={'5px'} color={'white'} ml={'2px'} fontWeight={600} fontSize={'15px'} _hover={{color: 'brand.blue'}} onClick={register}>Crear Cuenta</Button>
              <Button bgColor={'brand.blue'} h={'45px'} w={'130px'} border={'none'} borderRadius={'5px'} color={'white'} ml={'2px'} fontWeight={600} fontSize={'15px'} _hover={{color: 'brand.yellow'}} onClick={login}>Iniciar Sesion</Button>
            </Box>
            <Link href='/login' color={'brand.black'} opacity={'0.7'} _hover={{textDecor: 'none', color: 'brand.blue'}}>¿Olvidaste tu contraseña?</Link>
          </Box>
        </Box>
      </Box>
     }
    </>
  )
}

export default Login