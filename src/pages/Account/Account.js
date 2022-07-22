import { useEffect, useState } from 'react';
import { auth, signOut, db, doc} from '../../firebase'
import { getDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice'
import Complete from '../../components/Account/Complete';
import Loader from '../../components/Loader/Loader';
import tiktokLogo from '../../assets/images/tiktok.png'
import './Account.css'
import {
  Avatar,
  Box,
  Button,
  Grid,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { 
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaWhatsapp,
  FaInbox,
  FaYoutube,
  FaSpotify,
  FaTelegramPlane,
  FaTwitter,
  FaFire,
  FaGrinTongueWink,
  FaHeart,
  FaBars,
 } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';


function Account({user}) {

const [userData, setUserData] = useState([])
const dispatch = useDispatch()
const [isLoading, setIsLoading] = useState(true)

useEffect( () => {
  setTimeout( () => {
    setIsLoading(false)
  },2000)
})
 

useEffect( () => {
 const fetchData = async () =>{

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setUserData(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      dispatch(logout())
    }

  }

  fetchData()
},[user,dispatch])



  return (
    <>
    { userData.status === false ?
    <Complete user={user} />
    :
      isLoading ?
      <Loader /> :
      <Box bgColor={''} minH={'100vh'} pb={'50px'}>

        <Box display={'flex'} justifyContent={'space-between'} bgColor={'brand.black'} pt={'10px'} px={'20px'}>
          <Heading fontFamily={'Poppins'} color={'brand.blue'} fontSize={'30px'} fontWeight={800} >Linkedfy<span>!</span></Heading>
          <IconButton onClick={() => signOut(auth)} icon={<FaBars />} variant={'unstyled'} color={'brand.blue'} boxSize={'sd'} fontSize={'x-large'}/>
        </Box>

        <Box bgColor={'brand.black'} h={'130px'} borderBottomRadius={'20px'} />

        <Box bgColor={'white'} maxW={'350px'} mx={'auto'} borderRadius={'10px'} display='flex' flexDir='column' mt={'-30px'} textAlign={'center'} shadow={'lg'} mb={'40px'}>
          <Avatar size='xl' src='' mx={'auto'} mt={'-50px'} border={'2px solid #FFF'} mb={'5px'}/>
          <Heading fontFamily={'Poppins'} color={'brand.black'} fontSize={'18px'} fontWeight={400}>Nicolas Muñoz</Heading>
          <Heading fontFamily={'Poppins'} color={'brand.blue'}>NicholasNiculas</Heading>
          <Text fontFamily={'Poppins'} fontSize={'15px'} mb={'20px'} color={'brand.black'}>Velit eu ipsum cupidatat in duis. Duis consequat dolor ea proident ex aliquip pariatur velit labore consequat.</Text>
          <SimpleGrid columns={5} spacing={5} mb={'20px'} mx={'auto'}>
            <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaFacebookF />} isRound/></Box>
            <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaInstagram />} isRound/></Box>
            <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaTiktok />} isRound/></Box>
            <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaWhatsapp />} isRound/></Box>
            <Box><IconButton color={'brand.black'} variant='link' boxSize={'sd'} fontSize={'xx-large'} _hover={{color: 'brand.blue'}} icon={<FaTwitter />} isRound/></Box>
          </SimpleGrid>
        </Box>

        <Box bgColor={'white'} maxW={'375px'} mx={'auto'} display='flex' flexDir='column' textAlign={'center'} pt={'20px'} pb={'50px'} >
          <Image src={tiktokLogo} width={'100px'} mx={'auto'}  mb={'20px'} />
          <SimpleGrid columns={3} spacing={'1px'} mx={'auto'}>
            <Box w={'123px'}><Image src='https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ec715e053fb14b149c61dcb15655ad9f?x-expires=1658458800&x-signature=%2FTfmOT6n028clehs%2BvuFOjhdfYI%3D'/></Box>
            <Box w={'123px'}><Image src='https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ec715e053fb14b149c61dcb15655ad9f?x-expires=1658458800&x-signature=%2FTfmOT6n028clehs%2BvuFOjhdfYI%3D'/></Box>
            <Box w={'123px'}><Image src='https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ec715e053fb14b149c61dcb15655ad9f?x-expires=1658458800&x-signature=%2FTfmOT6n028clehs%2BvuFOjhdfYI%3D'/></Box>
            <Box w={'123px'}><Image src='https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ec715e053fb14b149c61dcb15655ad9f?x-expires=1658458800&x-signature=%2FTfmOT6n028clehs%2BvuFOjhdfYI%3D'/></Box>
            <Box w={'123px'}><Image src='https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ec715e053fb14b149c61dcb15655ad9f?x-expires=1658458800&x-signature=%2FTfmOT6n028clehs%2BvuFOjhdfYI%3D'/></Box>
            <Box w={'123px'}><Image src='https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ec715e053fb14b149c61dcb15655ad9f?x-expires=1658458800&x-signature=%2FTfmOT6n028clehs%2BvuFOjhdfYI%3D'/></Box>
            <Box w={'123px'}><Image src='https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ec715e053fb14b149c61dcb15655ad9f?x-expires=1658458800&x-signature=%2FTfmOT6n028clehs%2BvuFOjhdfYI%3D'/></Box>

          </SimpleGrid>
        </Box>
      <Footer />
      </Box>
    }
    </>
  )
}

export default Account