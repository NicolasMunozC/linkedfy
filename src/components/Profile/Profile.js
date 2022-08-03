import { useEffect, useState } from 'react';
import { db, doc} from '../../firebase'
import { getDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice'
import Complete from '../../components/Account/Complete';
import Loader from '../../components/Loader/Loader';
import './Profile.css'
import { Box } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer';
import Header from './Header';
import User from './User';
import Posts from './Posts';


function Profile({user}) {

const [userData, setUserData] = useState([])
const dispatch = useDispatch()
const [isLoading, setIsLoading] = useState(true)
const [isOwner, setIsOwner] = useState(false)

useEffect( () => {
  setTimeout( () => {
    if(user.email === userData.email){
      setIsOwner(true)
    }
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

        <Header />
        <User userData={userData} isOwner={isOwner} />
        <Posts />
        <Footer />
      </Box>
    }
    </>
  )
}

export default Profile