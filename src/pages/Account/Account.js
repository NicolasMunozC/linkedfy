import { auth, signOut } from '../../firebase'
import {
  Box,
  Button,
} from '@chakra-ui/react'

function Account() {

  return (
      <Box>
        <Button onClick={() => signOut(auth)}>Cerrar Sesion</Button>
      </Box>
  )
}

export default Account