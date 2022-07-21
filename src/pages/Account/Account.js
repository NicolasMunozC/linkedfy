import { useEffect, useState } from 'react';
import { auth, signOut, db, doc} from '../../firebase'
import { getDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice'
import {
  Box,
  Button,
} from '@chakra-ui/react'
import Complete from '../../components/Account/Complete';
import Loader from '../../components/Loader/Loader';

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
    { userData.status === "new" ?
    <Complete user={user} />
    :
      isLoading ?
      <Loader /> :
      <Box>
        <Button onClick={() => signOut(auth)}>Cerrar Sesion</Button>
      </Box>
    }
    </>
  )
}

export default Account