import React, { useRef, useState } from 'react'
import axios from 'axios'
import { 
    Box, 
    Button, 
    Heading, 
    Input, 
    Text,
    useToast
} from '@chakra-ui/react'
import { updateDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

function Complete({user}) {

    const nameRef = useRef(null)
    const lastnameRef = useRef(null)
    const usernameRef = useRef(null)
    const tiktokRef = useRef(null)
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)

    async function submit(e){
        e.preventDefault()
        setIsLoading(true)

        const userRef = doc(db, "users", user.uid)
        const postsRef = doc(db, "posts", user.uid)


        await updateDoc(userRef, {
            name: nameRef.current.value,
            lastname: lastnameRef.current.value,
            username: usernameRef.current.value,
            tiktok: tiktokRef.current.value,
            status: true,
          })

        await axios.post('http://localhost:3001/api', {username: tiktokRef.current.value})
        .then(function (res) {
          const response = res.data
          if(response.status === 200) {
            setPosts(response.data)
          }
        })
        .catch(function (error) {
            toast({
                title: 'Ups!!!',
                description: "No hemos encontrado tu usuario de Tik Tok",
                position: 'top-right',
                status: 'error'
            })
            return
        });

        async function setPosts(postsArray){
            await setDoc(postsRef, {
                postsImagesUrls: postsArray
            })
        }




        toast({
            title: 'Hurraaa!!!.',
            description: "Tu cuenta ya esta completa!",
            position: 'top-right',
            status: 'success'
        })

        setIsLoading(false)

        setTimeout( () => {
            window.location.reload()
            }, 3000)

    }

  return (
    <Box bgColor={'brand.yellow'} minH={'100vh'} display={'flex'}>
        <Box borderRadius={10} backgroundColor={'rgba(255, 255, 255, 0.5);'} boxShadow={'2xl'} p={'60px 30px'} max-w={'330px'} max-h={'750px'} m={'auto auto'} >
        <Heading color={'brand.blue'} fontSize={'20px'} fontWeight={900} fontFamily={'Poppins'}>Linkedfy</Heading>
        <Text opacity={'0.6'} color={'gray'} fontSize={'15px'} casing={'uppercase'} fontWeight={'400'}>Completa tus datos</Text>
        <Heading fontFamily={'Poppins'} fontSize={'40px'} fontWeight={800} color={'brand.black'} mb={'20px'}>Bienvenid@<span className='dotSpan'>!</span></Heading>
            <form onSubmit={submit}>
            <Box textAlign={'center'}>
                <Box display={'flex'} flexDir={'column'} textAlign={'center'} mb={'20px'}>
                    {/* <Box display={'flex'} mb={'20px'} mx={'auto'}>
                    <Avatar size='md' src=''/>
                    <Button my={'auto'} ml={'15px'} bgColor={'brand.black'} color={'white'} _hover={{bgColor: 'black'}} >Cambiar Imagen</Button>
                    </Box> */}
                    <Text textAlign={'left'} fontWeight={300} color={'brand.black'} mb={'-6px'} zIndex={1}>Nombre</Text>
                    <Input ref={nameRef} variant={'unstyled'} type='text' placeholder='Calvin' isRequired border={'none'} mb={'20px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}} _placeholder={{opacity: '0.6'}} />
                    <Text textAlign={'left'} fontWeight={300} color={'brand.black'} mb={'-6px'} zIndex={1}>Apellido</Text>
                    <Input ref={lastnameRef} variant={'unstyled'}  type={'text'} placeholder='Harris' isRequired border={'none'} mb={'20px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}} _placeholder={{opacity: '0.6'}}/>
                    <Text textAlign={'left'} fontWeight={300} color={'brand.black'} mb={'-6px'} zIndex={1}>Nombre de Usuario</Text>
                    <Input ref={usernameRef} variant={'unstyled'}  type={'text'} placeholder='CalvinHarris' isRequired border={'none'} mb={'20px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}} _placeholder={{opacity: '0.6'}} />
                    <Text textAlign={'left'} fontWeight={300} color={'brand.black'} mb={'-6px'} zIndex={1}>Usuario Tik-Tok</Text>
                    <Input ref={tiktokRef} variant={'unstyled'}  type={'text'} placeholder='CalvinHarrisOficial' isRequired border={'none'} mb={'20px'} borderRadius={0} h={'50px'} w={'100%'} borderBottom={'1px solid #009FB7'} fontSize={'20px'} _hover={{borderColor: 'none'}} _placeholder={{opacity: '0.6'}}/>
                </Box>
                    <Button type='submit' bgColor={'brand.blue'} h={'45px'} w={'130px'} border={'none'} borderRadius={'5px'} color={'white'} ml={'2px'} fontWeight={600} fontSize={'15px'} _hover={{color: 'brand.yellow'}} isLoading={isLoading && true}>Continuar</Button>
            </Box>
            </form>

        </Box>

    </Box>
  )
}

export default Complete